import './index.scss';



export default function index() {

    return(

        <main className='page-menu'>

            <header class="head">
                <a href='/home'><img class="logo" src="/images/logo.png" alt=""/></a>
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
                    <img class="back-img" src='/images/imgmenu.png' alt="" srcset=""/>
                </div>

            </div>

        </main>

    )
}