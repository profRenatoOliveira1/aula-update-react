import express from "express";
import { apagarPessoa, atualizarObjetoPessoa, buscaPessoa, listarPessoas, persistirObjetoPessoa } from "../db/banco";
import { Pessoa } from "../../model/Pessoa";

const router = express.Router();

router.get('/', (req, res) => {
    return res.json('Hello World');
});

router.get('/pessoas', async (req, res) => {
    try {
        console.log(`Recuperando informações de pessoas`);
        
        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = await listarPessoas();

        // Retorna o resultado para o cliente
        res.json(result.rows);

    } catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);

        // E retornado ao cliente
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
})

router.post('/cadastro', (req, res) => {
    // recupera os dados recebidos na requisição
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

    // instancia um novo objeto usando os dados da requisição
    const novaPessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);

    try {
        console.log(`Persistindo dados do objeto`);

        // Persistindo os dados no banco
        persistirObjetoPessoa(novaPessoa);

        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações cadastradas com sucesso" });
    } catch (error) {
        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao cadastrar informações:', error);

        // E restransmitida ao cliente
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
});

router.get('/pessoa/:nome', async (req, res) => {
    const { nome } = req.params;

    try {
        console.log(`Consultando registro com nome ${nome}`);

        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = await buscaPessoa(nome);

        // Retorna o resultado para o cliente
        res.json(result);

    } catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);

        // E retornado ao cliente
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
});

router.put('/atualizar', (req, res) => {
    
    try {
        console.log(`Atualizando objeto com id ${req.query.id}`);

        atualizarObjetoPessoa(
            parseInt(req.query.id as string),
            new Pessoa(req.body.nome,
                req.body.cpf,
                new Date(req.body.data_nascimento),
                req.body.telefone,
                req.body.endereco,
                req.body.altura,
                req.body.peso)
        );

        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações atualizadas com sucesso" });
    } catch (error) {
        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao alterar informações:', error);

        // E restransmitida ao cliente
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
});

router.delete('/deletar', (req, res) => {
    try {
        console.log(`Removendo o objeto com id ${req.query.id}`);

        // Execute a operação de exclusão no banco de dados
        apagarPessoa(parseInt(req.query.id as string));

        // Caso tenha dado certo, é retornado ao cliente
        res.status(204).end();
    } catch (error) {
        console.error('Erro ao remover o cadastro:', error);
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
});

export { router };