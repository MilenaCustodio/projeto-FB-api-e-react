import 'dotenv/config'

import usuarioController from './controller/usuarioController.js';
import projetoController from './controller/projetoController.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use (cors());
server.use (express.json());

server.use(usuarioController);
server.use (projetoController);

server.listen(process.env.PORT, () => console.log(`API CONECTADA NA PORTA ${process.env.PORT}`));