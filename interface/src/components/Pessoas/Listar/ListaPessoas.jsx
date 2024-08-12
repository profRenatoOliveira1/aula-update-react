import { useState, useEffect } from "react";
import PessoasRequests from "../../../fetch/PessoasRequests";
import ListaPessoasUtil from "./ListaPessoasUtil";
import { FaTrashCan } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";

function ListaPessoas() {
    const [pessoas, setPessoas] = useState([]);
    const util = new ListaPessoasUtil();

    useEffect(() => {
        const fetchPessoas = async () => {
            try {
                const pessoas = await PessoasRequests.listarPessoas();
                setPessoas(pessoas);
            } catch (error) {
                console.error('Erro ao buscar alunos: ', error);
            }
        };

        fetchPessoas();
    }, []);

    return (
        <>
            <div>
                {pessoas.length > 0 ? (
                    <table style={{ margin: '0 auto', width: '75%'}}>
                        <thead>
                            <tr style={{ borderBottom: '4px solid'}}>
                                <th hidden>ID</th>
                                <th>NOME</th>
                                <th>CPF</th>
                                <th>NASCIMENTO</th>
                                <th>TELEFONE</th>
                                <th>ENDEREÇO</th>
                                <th>ALTURA</th>
                                <th>PESO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pessoas.map(pessoa => (
                                <tr key={pessoa.id} style={{ borderBottom: '1px solid'}}>
                                    <td hidden>{pessoa.id}</td>
                                    <td>{pessoa.nome}</td>
                                    <td>{util.formatarCPF(pessoa.cpf)}</td>
                                    <td>{util.formatarData(pessoa.data_nascimento)}</td>
                                    <td>{util.formatarTelefone(pessoa.telefone)}</td>
                                    <td>{pessoa.endereco}</td>
                                    <td>{pessoa.altura}</td>
                                    <td>{pessoa.peso}</td>
                                    <td>
                                        <FaTrashCan  onClick={() => alert('deletar')}/>
                                    </td>
                                    <td>
                                        <AiFillEdit  onClick={() => alert('atualizar')}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
                    <p>Carregando...</p>
                )}
            </div>
        </>
    );
}

export default ListaPessoas;