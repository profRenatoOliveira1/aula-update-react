import express from "express";
import PessoaController from "./controller/PessoaController";

const router = express.Router();

const pessoaControler = new PessoaController('', '', new Date, '', '', 0, 0);

router.get('/', (req, res) => {
    return res.json('Hello World');
});

router.get('/pessoas', pessoaControler.todos);

router.put('/atualizar', pessoaControler.atualizar);

export { router };