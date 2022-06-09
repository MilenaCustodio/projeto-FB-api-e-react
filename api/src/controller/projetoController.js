import{ inserirComanda, buscarPorId, removerComanda, alterarComanda }from '../repository/filmeRepository.js';

import { Router } from 'express'

const server = Router();

server.post('/comanda', async (req, resp) =>{
    try{
        const novaComanda = req.body;
            
            if(!novaComanda.nome)
            throw new Error('Nome na comanda é obrigatório!');

            if(!novaComanda.quantidade)
            throw new Error('quantidade é obrigatório!');
            
            if(novaComanda.mesa)
            throw new Error('numero da mesa é obrigatório!');

            if(!novaComanda.codigo)
            throw new Error('código é obrigatório!');

            if(!novaComanda.data)
            throw new Error('data do pedido é obrigatória!');

            if(!novaComanda.descricao)
            throw new Error('descrição do pedido é obrigatório!');
            
            if(!novaComanda.valor)
            throw new Error('Valor é obrigatória!');
            
            if(!novaComanda.usuario)
            throw new Error('usuario nao logado!');



        const comandaInserida = await inserirComanda(novaComanda);

        resp.send(comandaInserida);
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/comanda/:id' , async (req,resp)=> {
    try{
        const id = Number(req.params.id);
        const resposta = await buscarPorId(id);

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
        const {id} = req.params;
        const novaComanda =req.body;

        if(!novaComanda.nome)
            throw new Error('Nome na comanda é obrigatório!');

            if(!novaComanda.quantidade)
            throw new Error('quantidade é obrigatório!');
            
            if(novaComanda.mesa)
            throw new Error('numero da mesa é obrigatório!');

            if(!novaComanda.codigo)
            throw new Error('código é obrigatório!');

            if(!novaComanda.data)
            throw new Error('data do pedido é obrigatória!');

            if(!novaComanda.descricao)
            throw new Error('descrição do pedido é obrigatório!');
            
            if(!novaComanda.valor)
            throw new Error('Valor é obrigatória!');
            
            if(!novaComanda.usuario)
            throw new Error('usuario nao logado!');

        const resposta = await alterarComanda(id,filme);
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
