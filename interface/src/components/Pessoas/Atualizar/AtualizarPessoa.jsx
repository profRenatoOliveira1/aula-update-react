import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import PessoaRequests from '../../../fetch/PessoasRequests';
import { formatarData } from "../../../util/Utilitario";
import './AtualizarPessoa.css';

/**
 * Componente com o formulário para atualizar os dados do aluno
 */
function AtualizarPessoa() {
    // usado para navegar entre páginas (redirecionar)
    const navigate = useNavigate();
    // usado para pegar os dados da página anterior (as informações do usuário que foram passadas pela componente ListAlunos)
    const location = useLocation();
    // recupera as informações que vieram da página anterior e armazena na variável objAluno
    const objPessoa = location.state.objeto;

    // Cria um estado para armazenar os dados do aluno e já preenche com as informações recebidas da página anterior
    const [pessoa, setPessoa] = useState({
        id: objPessoa.id,
        nome: objPessoa.nome,
        cpf: objPessoa.cpf,
        data_nascimento: formatarData(new Date(objPessoa.data_nascimento)),
        telefone: objPessoa.telefone,
        endereco: objPessoa.endereco,
        altura: objPessoa.altura,
        peso: objPessoa.peso,
    })

    // Função para atualizar os valores conforme os inputs do formulário são preenchidos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPessoa(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Função para atualizar os dados do aluno no banco de dados
    const handleSubmit = async (e) => {
        // evita o recarregamento da página
        e.preventDefault();

        // chama a função atualizarAluno do arquivo AlunoAPIService
        if (await PessoaRequests.atualizarPessoa(pessoa)) {
            // se a função executou sem nenhum problema, é exibido um alerta confirmando a alteração para o usuário
            window.alert(`Aluno ${pessoa.nome} atualizado com sucesso`);
            // redireciona o usuário para a página de listagem de alunos
            navigate(`/listagem`, { replace: true });
        } else {
            // caso a funçao atualizarAluno retorne algum erro, é exibido um log
            console.log('Erro ao atualizar dados do aluno');
        }
    }

    return (
        <>
            <h1>Atualizar Aluno</h1>
            <form onSubmit={handleSubmit}>
                <label> Nome
                    <input
                        type="text"
                        name="nome"
                        value={pessoa.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    CPF
                    <input
                        type="number"
                        name="cpf"
                        value={pessoa.cpf}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Data de Nascimento
                    <input
                        type="date"
                        name="data_nascimento"
                        value={pessoa.data_nascimento}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Telefone
                    <input
                        type="number"
                        name="telefone"
                        value={pessoa.telefone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Endereço
                    <input
                        type="text"
                        name="endereco"
                        value={pessoa.endereco}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Altura
                    <input
                        type="number"
                        name="altura"
                        value={pessoa.altura}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Peso
                    <input
                        type="number"
                        name="peso"
                        value={pessoa.peso}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default AtualizarPessoa;