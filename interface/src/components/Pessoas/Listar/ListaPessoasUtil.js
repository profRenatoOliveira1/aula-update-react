import PessoasRequests from "../../../fetch/PessoasRequests";

export default class ListaPessoasUtil {
    
    async fetchPessoas() {
        try {
            const pessoas = await PessoasRequests.listarPessoas();
            return pessoas;
        } catch (error) {
            console.error('Erro ao buscar alunos: ', error);
        }
    }
    
    /**
     * Formata datas no padrão brasileiro
     * @param {*} data 
     * @returns data formatada DD/MM/AAAA
     */
    formatarData = (data) => {
        return new Date(data).toLocaleDateString('pt-br');
    };

    /**
     * Máscara CPF
     * @param {*} cpf 
     * @returns cpf formatado xxx.xxx.xxx.-xx
     */
    formatarCPF = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };

    /**
     * Máscara telefone
     * @param {*} telefone 
     * @returns telefone formatado (xx) xxxxx-xxxx
     */
    formatarTelefone = (telefone) => {
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    };

    /**
     * Converte a altura em metros e fixa 2 dígitos
     * @param {*} altura 
     * @returns altura formatada em metros
     */
    formatarAltura = (altura) => {
        return (altura / 100).toFixed(2);
    }    

}