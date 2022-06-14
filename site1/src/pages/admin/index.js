import {login} from '../../api/usuarioApi'
import { useNavigate } from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import React, {useState, useRef, useEffect} from 'react'
import './index.scss';


export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');   
    const [carregando, setCarregando] = useState(false);
    
    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/admin');
        }
    }, [])
    
    
    
    async function entrarClick( ){
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const r = await login(email,senha);
            storage('usuario-logado', r);

            setTimeout(() => {
                navigate('/menu');
            }, 3000);
            
         }  catch (err) {
             ref.current.complete();
             setCarregando(false);
             if(err.response.status === 401 ) {
                 setErro(err.response.data.erro);
             }

        }

    }


    return(

        <main className='page-admin'>
            <LoadingBar color = '#f11946' ref={ref} />

            <header class="head">
                <a href='/'><img class="logo" src="/images/logo.png" alt=""/></a>
            </header>
            
            <div class="background2">
                <div class="box-margin">
                    <div class="user">Nome de usuário</div>
                    <input class="box" type="text" placeholder='informe seu e-mail' value={email} onChange={e => setEmail(e.target.value)} />
                    <hr/>
                </div>

                <div class="box-margin">
                    <div class="user">Senha</div>
                    <input class="box" type='password' placeholder='***' value={senha} onChange={e => setSenha(e.target.value)} />
                    <hr/>
                </div>

                <button class="button" onClick={entrarClick} disabled= {carregando}>Entrar</button>
                <div className='erroadm'>
                    {erro}
                </div>
            </div>

        </main>

    )
}