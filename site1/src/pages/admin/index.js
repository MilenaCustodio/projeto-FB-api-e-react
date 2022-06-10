import './index.scss';



export default function index() {

    return(

        <main className='page-admin'>

            <header class="head">
                <a href='/'><img class="logo" src="/images/logo.png" alt=""/></a>
            </header>
            
            <div class="background2">
                <div class="box-margin">
                    <div class="user">Nome de usuário</div>
                    <input class="box" type="text" name="" id=""/>
                    <hr/>
                </div>

                <div class="box-margin">
                    <div class="user">Senha</div>
                    <input class="box" type="password" name="" id=""/>
                    <hr/>
                </div>

                <a href='/menu'><div class="button">Entrar</div></a>

            </div>

        </main>

    )
}