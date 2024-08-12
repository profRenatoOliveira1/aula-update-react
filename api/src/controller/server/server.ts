import express from 'express';
import cors from 'cors';
import { router } from '../routes/routes'

// Criando um servidor com a API express
const server = express();

// configurando o app para usar JSON
server.use(express.json());

// Configurando o app para usar o CORS
server.use(cors());

// Configurando o app para usar as rotas do arquivo routes.ts
server.use(router);

export { server };