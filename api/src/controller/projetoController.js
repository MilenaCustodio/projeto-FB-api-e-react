import{ inserirComanda, removerComanda, alterarComanda, buscarPorData,buscarPorCodigo }from '../repository/projetoRepository.js';

import { Router } from 'express'

const server = Router();

server.post('/comanda', async (req, resp) =>{
    try{
        const novaComanda = req.body;
            
            if(!novaComanda.nome)
            throw new Error('Nome na comanda é obrigatório!');

            if(!novaComanda.quantidade)
            throw new Error('quantidade é obrigatório!');
            
            if(!novaComanda.mesa)
            throw new Error('numero da mesa é obrigatório!');

            if(!novaComanda.codigo)
            throw new Error('código é obrigatório!');

            if(!novaComanda.data)
            throw new Error('data do pedido é obrigatória!');

        const comandaInserida = await inserirComanda(novaComanda);

        resp.send(comandaInserida);
    } catch(err){
        console.log(err.message)
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/comanda/codigo' , async (req , resp)=> {
    try{
        const { codigo } = req.query;
        const resposta = await buscarPorCodigo( codigo );

        if(!resposta)
            throw new Error('Comanda não encontrada');

            resp.send(resposta)
    } catch (err) {
        resp.status(400).send ({
            erro: err.message
        })
    }
})

server.get('/comanda/busca' , async (req,resp)=> {
    try{
        const {data} = req.query;
        const resposta = await buscarPorData(data);

        if(!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send ({
            erro: err.message
        })
    }
})


server.delete('/comanda/:id' , async (req,resp)=> {
    try{
        const {id} = req.params;
        
        const resposta = await removerComanda(id);
        if(resposta != 1)
            throw new Error('Comanda não pode ser removida.');
        
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send ({
            erro: err.message
        })
    }
})


server.put('/comanda/:id' , async (req,resp)=> {
    try{
        const { id } = req.params;
        const novaComanda = req.body;

            if(!novaComanda.descricao)
            throw new Error('descrição do pedido é obrigatório!');
            
            if(!novaComanda.valor)
            throw new Error('Valor é obrigatória!');
            
        const resposta = await alterarComanda(id,novaComanda);
        if(resposta != 1)
            throw new Error('Comanda não pode ser alterada.');
        else
            resp.status(204).send();

    } catch (err) {
        resp.status(400).send ({
            erro: err.message
        })
    }
})

export default server;