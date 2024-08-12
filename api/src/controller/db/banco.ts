import { Pessoa } from "../../model/Pessoa";
import { DatabaseModel } from "./conn";

const banco = new DatabaseModel().pool;

export async function persistirPessoa(nome: string, cpf: string, data_nascimento: Date, telefone: string, endereco: string, altura: number, peso: number) {
    return banco.query(`INSERT INTO pessoas 
                    (nome, cpf, data_nascimento, telefone, endereco, altura, peso) 
                    VALUES 
                    ('${nome}', '${cpf}', '${data_nascimento}', '${telefone}', '${endereco}', ${altura}, ${peso})`);
}

export async function persistirObjetoPessoa(pessoa: Pessoa) {
    return banco.query(`INSERT INTO pessoas 
                    (nome, cpf, data_nascimento, telefone, endereco, altura, peso) 
                    VALUES 
                    ('${pessoa.getNome()}', '${pessoa.getCPF()}', '${pessoa.getDataNascimento().getFullYear()}-${pessoa.getDataNascimento().getMonth()}-${pessoa.getDataNascimento().getDate()}', '${pessoa.getTelefone()}', '${pessoa.getEndereco()}', ${pessoa.getAltura()}, ${pessoa.getPeso()})`);
}

export async function atualizarPessoa(id: number, nome: string, cpf: string, data_nascimento: Date, telefone: string, endereco: string, altura: number, peso: number) {
    return banco.query(`UPDATE pessoas
                        SET nome = '${nome}', 
                            cpf = '${cpf}', 
                            data_nascimento = '${data_nascimento}', 
                            telefone = '${telefone}', 
                            endereco = '${endereco}', 
                            altura = ${altura}, 
                            peso = ${peso}
                        WHERE id = ${id}`);
}

export async function atualizarObjetoPessoa(id: number, pessoa: Pessoa) {
    return banco.query(`UPDATE pessoas
                        SET nome = '${pessoa.getNome()}', 
                            cpf = '${pessoa.getCPF()}', 
                            data_nascimento = '${pessoa.getDataNascimento().getFullYear()}-${pessoa.getDataNascimento().getMonth()}-${pessoa.getDataNascimento().getDate()}', 
                            telefone = '${pessoa.getTelefone()}', 
                            endereco = '${pessoa.getEndereco()}', 
                            altura = ${pessoa.getAltura()}, 
                            peso = ${pessoa.getPeso()}
                        WHERE id = ${id}`);
}

export async function listarPessoas() {
    return banco.query('SELECT * FROM pessoas');
}

export async function buscaPessoa(nome: string) {
    return banco.query(`SELECT * FROM pessoas WHERE nome LIKE '%${nome}%';`);
}

export async function apagarPessoa(id: number) {
    await banco.query(`DELETE FROM pessoas WHERE id = ${id}`);
}