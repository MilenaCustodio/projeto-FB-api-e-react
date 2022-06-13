import './index.scss';
import { useState } from 'react';

import { toast} from 'react-toastify'


import { inserirComanda} from '../../api/projetoApi'
import storage from 'local-storage'



export default function index() {
    const[nome,setNome] = useState('');
    const[quantidade,setQuantidade] = useState(0);
    const[mesa,setMesa] = useState(0);
    const[codigo,setCodigo] = useState(0);
    const[data,setData] = useState(0);
   
    async function registrarClick( ) {
        try{
            const usuario = storage('usuario-logado', id);
            const r = await inserirComanda(nome,quantidade,mesa,codigo,data, usuario);
            
            toast('Comanda cadastrada com sucesso!');
        }catch(err){
            toast(err.message);

        }

    }
    
    return(

        <main className='page-cadastro'>
            <ToastContainer/>

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
                            <button class="button-cod" value={codigo} onChange={e => setCodigo(e.target.value)}>GERAR CÓDIGO</button>
                        </div>

                        <div class="boxes">
                            <h2 class="subt1">Nº Mesa *</h2>
                            <select class="select-box" value={mesa} onChange={e => setMesa(e.target.value)}>
                                <option value="">- Selecione -</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        

                        </div>

                        <div class="boxes">
                            <h2 class="subt1">Quantidade de pessoas *</h2>
                            <select class="select-box" value={quantidade} onChange={e => setQuantidade(e.target.value)}>
                                <option value="">- Selecione -</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        

                        </div>

                        <div class="boxes">
                        <h2 class="subt1">Nome cliente *</h2>                    
                        <input class="select-box text" type="text" name="" id="" value={nome} onChange={e => setNome(e.target.value)}/>
                    
                        </div>
                    </div>

                    <div class="right-buttons">

                    <button class="buttons-cadastro" onClick={registrarClick}>Registrar</button>
                    <h2 class="subt1">Data Cadastro *</h2>                    
                    <input class="select-box date" type="date" name="" id="" value={data} onChange={e => setData(e.target.value)}/>
                
                    </div>

            
                </div>

            </div>


        </main>

    )
}