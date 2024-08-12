import { server } from './server/server';
import { DatabaseModel } from '../controller/db/conn';

// Definindo a porta onde o servidor vai
// escutar as requisições
const port: number = 3000; 

// Executando o servidor
// Testa a conexão com o banco de dados
new DatabaseModel().testeConexao().then((res) => {
    // se a conexão estiver funcionando, inicia o servidor
    if(res) {
        server.listen(port, () => {
            console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
        });
    // se a conexão não estiver funcionando, é exibida a mensagem que o banco está indisponível
    } else {
        console.log(`Banco de dados indisponível, tente novamente.`);
    }
})
