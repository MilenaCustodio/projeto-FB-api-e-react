import './index.scss';



export default function index() {

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
                            <button class="button-cod">GERAR CÓDIGO</button>
                        </div>

                        <div class="boxes">
                            <h2 class="subt1">Nº Mesa *</h2>
                            <select class="select-box">
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
                            <select class="select-box">
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
                            <h2 class="subt1">Data Cadastro *</h2>                    
                            <input class="select-box date" type="date" name="" id=""/>
                        

                        </div>
                    </div>

                    <div class="right-buttons">

                        <button class="buttons-cadastro">Novo Cadastro</button>
                        <button class="buttons-cadastro">Editar</button>
                        <button class="buttons-cadastro end">Registrar</button>
                
                    </div>

            
                </div>

            </div>


        </main>

    )
}