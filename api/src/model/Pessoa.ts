export class Pessoa {

    // atributos da classe
    private id: number = 0;
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //método construtor
    public constructor (_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {
            this.nome = _nome;
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso = _peso;
    }

    // métodos GETTERS and SETTERS
    
    public getId() {
        return this.id;
    }

    public setId(_id: number) {
        this.id = _id;
    }

    /**
     * Retorna o nome da pessoa
     * 
     * @returns nome : nome da pessoa
     */
    public getNome() {  
        return this.nome;
    }

    /**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _nome : nome da pessoa
     */
    public setNome(_nome: string){  
        this.nome = _nome;
    }

    /**
     * Retorna o CPF da pessoa
     * 
     * @returns cpf : cpf da pessoa 
     */
    public getCPF() {
        return this.cpf;
    }

    public setCPF(_cpf: string) {
        this.cpf = _cpf;
    }

    public getDataNascimento() {
        return this.data_nascimento;
    }

    public setDataNascimento(_data_nascimento: Date) {
        this.data_nascimento = _data_nascimento;
    }

    public getTelefone() {
        return this.telefone;
    }

    public setTelefone(_telefone: string) {
        this.telefone = _telefone;
    }

    public getEndereco() {
        return this.endereco;
    }

    public setEndereco(_endereco: string) {
        this.endereco = _endereco;
    }

    public getAltura() {
        return this.altura;
    }

    public setAltura(_altura: number) {
        this.altura = _altura;
    }

    public getPeso() {
        return this.peso;
    }

    /**
     * Atribui peso a pessoa
     * 
     * @param _peso
     *  peso da pessoa 
     */
    public setPeso(_peso: number) {
        this.peso = _peso;
    }

    public mostraPessoa() {
        console.log(`Nome: ${this.nome}\nCPF: ${this.cpf}\nData de nascimento: ${this.data_nascimento.getUTCDate()}/${this.data_nascimento.getMonth()+1}/${this.data_nascimento.getFullYear()}\nTelefone: ${this.telefone}\nEndereço: ${this.endereco}\nAltura: ${this.altura}\nPeso: ${this.peso}`);
    }

    // implementar os métodos
    public falar():void {
        // lógica de negócio
        console.log(`${this.nome} está falando...`);
    }

    public falarFrase(_frase: string):void {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar():void {
        console.log(`${this.nome} está andando...`);
    }

    public andarQuilometros(quilometros: number):void {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${quilometros} quilometros`);
        }, 3000);
    }

    public comer(): void {
        console.log(`${this.nome} está comendo...`);
    }

    public comerPrato(prato: string):void {
        console.log(`${this.nome} está comendo ${prato}`);
    }
}