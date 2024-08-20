import { Request, Response } from 'express';
import { Pessoa } from "../model/Pessoa";

export default class PessoaController extends Pessoa {

    public async todos(req: Request, res: Response): Promise<Response> {
        try {
            const pessoas = await Pessoa.listarPessoas();
            
            return res.status(200).json(pessoas);
        } catch (error) {
            console.error(`Erro no modelo: ${error}`);
            return res.json({mensagem: "Erro ao listar pessoas."});
        }
    }

    public async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, cpf, dataNascimento, telefone, endereco, altura, peso } = req.body;
            const pessoa = new Pessoa(nome, cpf, new Date(dataNascimento), telefone, endereco, parseFloat(altura), parseFloat(peso));
            pessoa.setId(parseInt(req.query.id as string));
            
            if(await Pessoa.atualizarCadastroPessoa(pessoa)) {
                return res.status(200).json({ mensagem: "Cadastro atualizado com sucesso!" });
            } else {
                return res.status(400).json('Não foi possível atualizar a pessoa no banco de dados');
            }
        } catch (error) {
            console.error(`Erro no modelo: ${error}`);
            return res.json({mensagem: "Erro ao atualizar pessoa."});
        }
    }
}