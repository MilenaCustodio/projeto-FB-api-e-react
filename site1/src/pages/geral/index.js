import './index.scss';



export default function Index() {

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
                    <main class="boxes">

                        <table>

                            <thead>
                                <tr>

                                    <th>Cod</th>
                                    <th>Nome</th>
                                    <th>Valor</th>

                                </tr>

                            </thead>
                            
                            <tbody>


                                <tr>

                                    <td>dsadadas</td>
                                    <td>dsadsad</td>
                                    <td>wasdwa</td>

                                </tr>

                                <tr>

                                    <td>dasdsa</td>
                                    <td>sadasdas</td>
                                    <td>dsawwwdasdsada</td>

                                </tr>
        
                            </tbody>
                        </table>

                    </main>
                    
                </section>


            </div>


        </main>

    )
}