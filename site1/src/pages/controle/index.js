import './index.scss';
import { useState } from 'react';

import { toast} from 'react-toastify'


import { inserirComanda, alterarComanda} from '../../api/projetoApi'
import storage from 'local-storage'







export default function Index() {

        const[valor,setValor] = useState(0);
        const[descricao,setDescricao] = useState("");
        const[codigo,setCodigo] = useState(0);
        const[id,setId] = useState(0);
    
       
        async function finalizarClick( ) {
            try{
                const usuario = storage('usuario-logado', id);
                
              
                if (id===0) {
                    const r = await inserirComanda(descricao, valor, codigo);
                    setId(r.id);
                    toast('Comanda cadastrada com sucesso!');
                
                }
                else{
                     await alterarComanda(descricao, valor, codigo);
                     toast('Comanda alterada com sucesso!');
                    }
                
                
                
            }catch(err){
                toast(err.message);
    
            }
    
        }
    
    return(

        <main className='page-controle'>

            <header class="head">
                <a href='/'><img class="logo" src="/images/logo.png" alt=""/></a>
            </header>

            <div class = "main">

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

                    <div class="top-control">

                        <div class="boxes top-control">

                            <div class="box">
                                <h2 class="subt2">Código da comanda *</h2>
                                <input class="text1" type="text" name="" id="" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                            </div>

                        </div>
                        
                    </div>
                    <hr/>
                    <div class="main-control">
                        <h2 class="subt2">Organização Pedido</h2>
                        <textarea class="text2" name="" id="" cols="30" rows="10" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>

                    </div>

                    <div class="footer-control">
                        
                        <div class="total">
                            <h2 class="subt2">Total a Pagar *</h2>
                            <input class="text1" type="text" name="" id="" value={valor} onChange={e => setValor(e.target.value)}/>
                        </div>

                        <button class="b2" onClick={finalizarClick}> {id=== 0 ? 'Finalizar' : 'Alterar' } </button>
                    </div>
                    
                </div>
            </div>


        </main>

    )
}