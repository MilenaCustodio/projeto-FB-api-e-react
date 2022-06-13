import './index.scss';



export default function Index() {

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
                                <input class="text1" type="text" name="" id=""/>
                            </div>

                        </div>

                        <div class="buttons">
                            <button>Editar</button>
                        </div>
                        
                    </div>
                    <hr/>
                    <div class="main-control">
                        <h2 class="subt2">Organização Pedido</h2>
                        <textarea class="text2" name="" id="" cols="30" rows="10"></textarea>

                    </div>

                    <div class="footer-control">
                        
                        <div class="total">
                            <h2 class="subt2">Total a Pagar *</h2>
                            <input class="text1" type="text" name="" id=""/>
                        </div>

                        <button class="b2">Finalizar</button>
                    </div>
                    
                </div>
            </div>


        </main>

    )
}