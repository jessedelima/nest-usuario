import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'

async function start (){
    await createConnection();

    const app = express();
    app.use(express.json());

    app.listen(3000, () => {
        console.log("O Servidor está rodando na porta 3000.");
    });
}

start();