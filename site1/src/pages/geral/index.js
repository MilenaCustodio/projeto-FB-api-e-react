import './index.scss';



export default function index() {

    return(

        <main className='page-geral'>

            <header class="head">
                <a href='/'><img class="logo" src="/images/logo.png" alt=""/></a>
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

                <section class="background">
                    <header class="main-header">
                        <div class="cont-header">
                            <h4>Data de atendimento*</h4>
                            <input type="date" class="input-date-header"/>
                        </div>
                        <hr/>
                    </header>
                    <main class="boxes-text">

                        <input class="text-box" type="text" name="" id=""/>
                        <input class="text-box color-box" type="text" name="" id=""/>
                        <input class="text-box" type="text" name="" id=""/>
                        <input class="text-box color-box" type="text" name="" id=""/>
                        <input class="text-box " type="text" name="" id=""/>
                        <input class="text-box color-box" type="text" name="" id=""/>
                        <input class="text-box " type="text" name="" id=""/>
                        <input class="text-box color-box" type="text" name="" id=""/>
                        <textarea class="text-box end-box" name="" id="" cols="30" rows="10"></textarea>

                    </main>
                    
                </section>


            </div>


        </main>

    )
}