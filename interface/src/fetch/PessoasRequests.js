class PessoasRequests {
    constructor() {
        this.serverUrl = 'http://localhost:3333';
        this.routeCadastrarPessoa = '/cadastro';
        this.routeListarPessoas = '/pessoas';
        this.routeRemoverPessoa = '/deletar';
        this.routeAtualizarPessoa = '/atualizar';
    }

    async listarPessoas() {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarPessoas}`);

            if (!response.ok) {
                throw new Error('Erro ao buscar alunos');
            }

            const pessoas = await response.json();

            if (!Array.isArray(pessoas)) {
                throw new Error('Resposta inválida: não é um array JSON');
            }

            return pessoas;
        } catch (error) {
            console.error('Erro: ', error);
            throw error;
        }
    }

    // async cadastrarPessoa(pessoa) {
    //     try {
    //         const response = await fetch(`${this.serverUrl}${this.routeCadastrarPessoa}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(pessoa)
    //         });
    //         if (!response.ok) {
    //             throw new Error('Erro ao cadastrar pessoa');
    //         }
    //         console.log('Pessoa cadastrada com sucesso!');
    //         return await response.json();
    //     } catch (error) {
    //         console.error('Erro: ', error);
    //         throw error;
    //     }
    // }

    // async removerPessoa(id) {
    //     try {
    //         const response = await fetch(`${this.serverUrl}${this.routeRemoverPessoa}?id=${id}`, {
    //             method: 'DELETE'
    //         });
    //         if (!response.ok) {
    //             throw new Error('Erro ao enviar formulário');
    //         }
    //         return true;
    //     } catch (error) {
    //         console.error('Erro: ', error);
    //         return null;
    //     }
    // }

    async atualizarPessoa(pessoa) {
        console.log(pessoa);
        
        try {
            const response = await fetch(`${this.serverUrl}${this.routeAtualizarPessoa}?id=${pessoa.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pessoa)
            });
            if (!response.ok) {
                throw new Error('Erro ao enviar formulário');
            }
            return true;
        } catch (error) {
            console.error('Erro: ', error);
            window.alert('Erro ao atualizar aluno');
            return null;
        }
    }

}

export default new PessoasRequests();