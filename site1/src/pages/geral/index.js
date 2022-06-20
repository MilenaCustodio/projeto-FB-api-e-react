import {listarTodasComandas, buscarPorData} from '../../api/projetoApi'


import './index.scss';
import {useState, useEffect} from 'react'



export default function Index() {
    const[ comanda, setComanda] = useState([]);
    const [busca, setBusca] = useState('');



    async function filtrar(){
        const resp = await buscarPorData(filtrar);
        setComanda(resp);
    }

    async function carregarTodasComandas(){
        const resp = await listarTodasComandas();
        setComanda(resp);
    }


    useEffect(() => {
        carregarTodasComandas();
    }, []);

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

                            <div class="pesquisa">
                                <input type="text" placeholder = 'Buscar comanda por data' class="input-date-header" value = {busca} onChange={e => setBusca(e.target.value)} /> 
                                <img class='icon-busca' src = '/images/icon-buscar.svg' alt= 'buscar' onClick={filtrar} />
                            </div>
                        
                        </div>
                        <hr/>
                    </header>
                    <main class="boxes">

                        <table>

                            <thead>
                                <tr>

                                    <th>Data</th>
                                    <th>Nome</th>
                                    <th>Valor</th>

                                </tr>

                            </thead>
                            
                            <tbody>



                                 <tr>

                                    <td>12/02/2020</td>
                                    <td>Milena</td>
                                    <td>120,00</td>

                                </tr>

                                
                                 <tr>

                                    <td>15/08/2020</td>
                                    <td>William</td>
                                    <td>80,00</td>

                                </tr>

                                 <tr>

                                    <td>14/08/2020</td>
                                    <td>Felipe</td>
                                    <td>50,00</td>

                                </tr>


                            {/* {comanda.map(item =>
                            <tr>

                                <td>{item.data}</td>
                                <td>{item.nome}</td>
                                <td>{item.valor}</td>

                            </tr>
                            
                            )}
                                 */}
        
                            </tbody>
                        </table>

                    </main>
                    
                </section>


            </div>


        </main>

    )
}