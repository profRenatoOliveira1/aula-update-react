// imports
import './AtualizarPessoa.css';
/**
 * Componente com o formulário para atualizar os dados do aluno
 */
function AtualizarPessoa() {

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
        //enviar dados para API
    }

    return (
        <>
            <h1>Atualizar Pessoa</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome
                    <input
                        type="text"
                        name="nome"
                        // value={pessoa.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    CPF
                    <input
                        type="number"
                        name="cpf"
                        // value={pessoa.cpf}
                        onChange={handleChange}
                    />
                </label>
                <div className='group'>
                    <label>
                        Data de Nascimento
                        <input
                            type="date"
                            name="dataNascimento"
                            // value={pessoa.dataNascimento}
                            onChange={handleChange}
                            style={{ width: '85%' }}
                        />
                    </label>
                    <label>
                        Telefone
                        <input
                            type="number"
                            name="telefone"
                            // value={pessoa.telefone}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label>
                    Endereço
                    <input
                        type="text"
                        name="endereco"
                        // value={pessoa.endereco}
                        onChange={handleChange}
                    />
                </label>
                <div className='group'>
                    <label>
                        Altura
                        <input
                            type="number"
                            name="altura"
                            // value={pessoa.altura}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Peso
                        <input
                            type="number"
                            name="peso"
                            // value={pessoa.peso}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default AtualizarPessoa;