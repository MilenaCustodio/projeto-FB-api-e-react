import './index.scss';
import { Link } from 'react-router-dom'


export default function Index() {
    return (
        <main className='page-home'>

            <header class="head">
                
                <Link to='/'> <img class="logo"  src='/images/logo.png' alt=''/> </Link>
                <Link class="login links" to='/admin'>LOGIN</Link>
            </header>

            
                <img class="background" src = '/images/foto1.png' alt = ''/>
            
    
            <section class="faixa1">

               <div class="background"></div>
               
               <div class="box1">
                    <h1 class="tx1 t1">Sobre nós</h1>
                    <p class="tx1 p1">Somos uma empresa criada em 2016 com filiais em grandes áreas de São Paulo</p>
                </div>

            </section>

            <section class="faixa2">

                <div class="img-box">
                    <img class="img1" src="/images/foto2.jpg" alt="" srcset=""/>
                </div>  

                <div class="box1 box2">
                    <h1 class="t1 t2">ÓTIMO CUSTO-BENEFÍCIO</h1>
                    <p class="p1">Nossos hambúrgueres são preparados na hora do pedido, com carne 100% original, na medida da fome, e vendidos a preços totalmente acessíveis, que  começam em R$18.</p>
                </div>

                <div class="img-box">
                    <img class="img1" src="/images/foto3.jpg" alt="" srcset=""/>
                </div>
            </section>

            <section class="faixa3">

                <h1 class="t3">CARDÁPIO</h1>


                <div class="main-cardapio">

                    <div class="cardapio1">

                        
                        <h2 class="subt4">STANDARD ____________________________ R$ 22</h2>
                        <p class="p4">O "QUERIDINHO" PREPARADO COM PÃO DE BRIOCHE, CARNE E QUEIJO</p>

                        <h2 class="subt4">STANDARD - DUPLO ______________________ R$ 32</h2>
                        <p class="p4">O "QUERIDINHO" PREPARADO COM PÃO DE BRIOCHE, CARNE E QUEIJO</p>

                        <h2 class="subt4">FASTBURGUER ___________________________ R$ 28</h2>
                        <p class="p4">NOSSA VERSÃO ESPECIAL DE HAMBÚRGUER, QUEIJO, CARNE, PICLES E MOLHO FAST</p>

                        <h2 class="subt4">FASTBURGUER - DUPLO __________________ R$ 38</h2>
                        <p class="p4">NOSSA VERSÃO ESPECIAL DE HAMBÚRGUER, QUEIJO, CARNE, PICLES E MOLHO FAST</p>

                        <h2 class="subt4">FIVE POINTS _____________________________ R$ 25</h2>
                        <p class="p4">BURGUER 200G, OVO MOLE,AZEITE TRUFADO,QUEIJO CAMPONÊS, PÃO DE HAMBÚRGUER TIPO FRANCÊS</p>

                    </div>

                    <div class="cardapio2">

                        <h2 class="subt4">FIVE POINTS - DUPLOS _________________ R$ 38</h2>
                        <p class="p4">BURGUER 200G, OVO MOLE,AZEITE TRUFADO,QUEIJO CAMPONÊS, PÃO DE HAMBÚRGUER TIPO FRANCÊS</p>

                        <h2 class="subt4">CHEESE PLEASE _______________________ R$ 35</h2>
                        <p class="p4">MUITO QUEIJO! LANCHE PREPARADO COM QUEIJO CAMEBERT EMPANADO QUE DERRETE NA BOCA A CADA MORDIDA COM TOMATE, ALFACE E MOLHO FAST</p>

                        <h2 class="subt4">SUPER _______________________________ R$ 35</h2>
                        <p class="p4">GOSTOSO EM DOSE DUPLA, NOSSO SUPER LEVE DOIS HAMBÚRGUERS, QUEIJO CHEDDAR, BACON E MOLHO PETER FAST</p>

                    </div>

                </div>
                
            </section>

            <section class="faixa4">

                <h1 class="fx4-t1">O Que Dizem Nossos Clientes</h1>

                <div class="main-box">

                    <div class="fx4-box">

                        <h2 class="fx4-subt1">Matheus Fagundes</h2>
                        <p class="fx4-p1">“Resolvi vir conhecer o lugar apesar de pequeno é muito charmoso, confortável e aconchegante. O hambúrguer então nem se fala. Muitooo gostoso e autêntico. Indico a todos.”</p>
                    
                    </div>

                    <div class="fx4-box">

                        <h2 class="fx4-subt1">Gabrielle alencar</h2>
                        <p class="fx4-p1">“Local muito atrativo, com ambiente extremamente familiar e atendentes excelentes. Lanches muito bem feitos e com uma batata rústica sensacional.”</p>
                    
                    </div>
                   
                    <div class="fx4-box">

                        <h2 class="fx4-subt1">Bianca Dias</h2>
                        <p class="fx4-p1">“Lanches saborosos demais, além de serem criativos, ótimos acompanhamentos, e atendentes extremamente educados.”</p>
                    
                    </div>

                </div>

            </section>

            <footer class="faixa5">

                <div class="fx5-top">
                    <h2 class="fx5-t">UTILIZE AQUI PARA DEPOSITAR SUA OPINIÃO SOBRE NOSSO ESTABELECIMENTO</h2>
                </div>

                <div class="fx5-back">

                    <div class="fx5-contact">

                        <h2 class="ft-t1">contato@FASTBURGUER.com.br</h2>
                        <h2 class="ft-t1">(11) 5628-7646 - Paulista</h2>

                    </div>

                    <div class="fx5-icons">
                        <img class="icon-footer icon-left" src="../../assets/images/icon-fb.png" alt="" srcset=""/>
                        <img class="icon-footer" src="../../assets/images/icon-instagram.png" alt="" srcset=""/>
                        <img class="icon-footer" src="../../assets/images/icon-wpp2.png" alt="" srcset=""/>
                    </div>
               
                </div>
                

            </footer>

        </main>


    )


}