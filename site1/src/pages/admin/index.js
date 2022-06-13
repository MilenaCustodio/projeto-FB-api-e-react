import {login} from '../../api/usuarioApi'
import { useNavigate } from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import {usestate, useRef, useEffect} from 'react'
import './index.scss';


export default function index() {
    const [email, setEmail] = usestate('');
    const [senha, setSenha] = usestate('');
    const [erro, setErro] = usestate('');
    const [carregando, setCarregando] = usestate(false);
    
    const navigate = useNavigate();
    const ref = useRef();


    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/admin');
        }
    })
    
    
    
    async function entrarClick( ){
        ref.current.continuousStart();
        setCarregando(true);

         try{
            const r = await  login(email,senha);
            storage('usuario-logado', r);

            setTimeout(() => {
                navigate('/admin');
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

                <a href='/menu'><div class="button" onClick={entrarClick} disabled= {carregando}>Entrar</div></a>
                <div>
                    {erro}
                </div>
            </div>

        </main>

    )
}