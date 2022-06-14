import './index.scss';
import { useState } from 'react';

import { toast} from 'react-toastify'


import { inserirComanda, alterarComanda} from '../../api/projetoApi'
import storage from 'local-storage'



export default function Index() {
    const[nome,setNome] = useState('');
    const[quantidade,setQuantidade] = useState(0);
    const[mesa,setMesa] = useState(0);
    const[codigo,setCodigo] = useState(0);
    const[data,setData] = useState('');
    const[id,setId] = useState(0);
 
    const opcoesmesa = [
        {id: 1, mesa: 1},
        {id: 2, mesa: 2},
        {id: 3, mesa: 3},
        {id: 4, mesa: 4},
        {id: 5, mesa: 5},
        {id: 6, mesa: 6},
    ];

    const opcoesqtd = [
        {id: 1, qtd: 1},
        {id: 2, qtd: 2},
        {id: 3, qtd: 3},
        {id: 4, qtd: 4},
        {id: 5, qtd: 5},
        {id: 6, qtd: 6},
    ];

   
    async function registrarClick( ) {
        try{
            const usuario = storage('usuario-logado', id);
            
          
            if (id===0) {
                const r = await inserirComanda(nome,quantidade,mesa,codigo,data);
                setId(r.id);
            
            
            }
            else{
                 await alterarComanda(nome,quantidade,mesa,codigo,data);
            }
            
            
            toast('Comanda cadastrada com sucesso!');
        }catch(err){
            toast(err.message);

        }

    }

    function novoClick(){
        setId(0);
        setNome('');
        setQuantidade(0);
        setMesa(0);
        setCodigo(0);
        setData(0);
        
    }

    
    return(

        <main className='page-cadastro'>

            <header class="head">
                <a href='/'><img class="logo" src="/images/logo.png"  alt=""/></a>
            </header>

            <div class="main">

                <div class="menu-right">

                    <div class="adm-area">
                        <input class="img-adm" type="image" src='/images/imgadm.jpg' alt=""/> 
                        <h2 class="subt1 adm-margin">Admin</h2>

                    </div>
                    
                    <hr/>
                    <h2 class="subt1">Comandas</h2>
                    <hr/>
                    <a href='/cadastro'><h2 class="subt1">Cadastro</h2></a>  
                    <a href='/controle'><h2 class="subt1">Controle</h2></a>
                    <hr/>
                    <a href='/geral'><h2 class="subt1">Controle Geral</h2></a>
                    <hr/>

                </div>

                <div class="background">
                    
                    <div class="left-buttons">

                        <div class="cod-buttons">
                            <h2 class="box-cod">Código</h2>
                            <input class="select-box text2" type="text" name="" id="" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                        </div>

                        <div class="boxes">
                            <h2 class="subt1">Nº Mesa *</h2>
                            <select value={mesa} onChange={e => setMesa(e.target.value)} class="select-box" >
                                <option  value="">- Selecione -</option>
                                {opcoesmesa.map((item) => (
                                    <option value={item.id}>{item.mesa}</option>
                                ))}
                            </select>
                        </div>

                        <div class="boxes">
                            <h2 class="subt1">Quantidade de pessoas *</h2>
                            <select value={quantidade} onChange={e => setQuantidade(e.target.value)} class="select-box" >
                                <option  value="">- Selecione -</option>
                                {opcoesqtd.map((item) => (
                                    <option value={item.id}>{item.qtd}</option>
                                ))}
                            </select>
                        </div>

                        <div class="boxes">
                        <h2 class="subt1">Nome cliente *</h2>                    
                        <input class="select-box text" type="text" name="" id="" value={nome} onChange={e => setNome(e.target.value)}/>
                    
                        </div>
                    </div>

                    <div class="right-buttons">

                    <button class="buttons-cadastro" onClick={registrarClick}>Registrar</button>
                    <button class="buttons-cadastro" onClick={novoClick}>Novo</button>
                    <h2 class="subt1">Data Cadastro *</h2>                    
                    <input class="select-box date" type="date" name="" id="" value={data} onChange={e => setData(e.target.value)}/>
                
                    </div>
            
                </div>

            </div>


        </main>

    )
}