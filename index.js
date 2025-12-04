import express from 'express';
import pool from './servicos/conexao.js';
import cors from 'cors';

import { cadastraLead } from './servicos/cadastro_servico.js';
import { validaUsuario } from './validacao/valida.js';


const app = new express();

app.use(cors());
app.use(express.json());

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;

    const usuarioValido = validaUsuario({ nome, email, telefone });

    if (usuarioValido.status) {
        await cadastraLead(nome, email, telefone);
        return res.status(201).send({ mensagem: "Usuário cadastrado com sucesso" });
    } else {
        return res.status(400).send({ mensagem: usuarioValido.mensagem });
    }
});


app.listen(3001, async () => {
    console.log("Servidor Iniciado");

    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
});