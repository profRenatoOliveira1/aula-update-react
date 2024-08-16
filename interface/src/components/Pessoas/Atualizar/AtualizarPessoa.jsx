// imports

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
            <h1>Atualizar Aluno</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="nomeAluno"
                        value={pessoa.nomeAluno}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        name="cpfAluno"
                        value={pessoa.cpfAluno}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="date"
                        name="dataNascimentoAluno"
                        value={pessoa.dataNascimentoAluno}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        name="telefoneAluno"
                        value={pessoa.telefoneAluno}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="enderecoAluno"
                        value={pessoa.enderecoAluno}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        name="alturaAluno"
                        value={pessoa.alturaAluno}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        name="pesoAluno"
                        value={pessoa.pesoAluno}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default AtualizarPessoa;