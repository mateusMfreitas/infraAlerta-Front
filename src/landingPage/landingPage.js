import React from 'react';
import { Helmet } from 'react-helmet';

function LandingPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                {/* SEO Meta Tags */}
                <meta name="description" content="Your description" />
                <meta name="author" content="Your name" />

                {/* OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn */}
                <meta property="og:site_name" content="" /> {/* website name */}
                <meta property="og:site" content="" /> {/* website link */}
                <meta property="og:title" content="" /> {/* title shown in the actual shared post */}
                <meta property="og:description" content="" /> {/* description shown in the actual shared post */}
                <meta property="og:image" content="" /> {/* image link, make sure it's jpg */}
                <meta property="og:url" content="" /> {/* where do you want your post to link to */}
                <meta name="twitter:card" content="summary_large_image" /> {/* to have large image post format in Twitter */}

                {/* Webpage Title */}
                <title>InfraAlerta</title>

                {/* Styles */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
                    rel="stylesheet"
                />
                <link href="css/" rel="stylesheet" />
                <link href="css/fontawesome-all.css" rel="stylesheet" />
                <link href="css/swiper.css" rel="stylesheet" />
                <link href="css/magnific-popup.css" rel="stylesheet" />
                <link href="css/styles.css" rel="stylesheet" />

                {/* Favicon */}
                <link rel="icon" href="images/favicon.png" />
            </Helmet>

            {/* Your page content here */}
            <div className="body-content" data-spy="scroll" data-target=".fixed-top">
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg fixed-top navbar-light top-nav-collapse">
                    <div className="container">
                        <a className="navbar-brand logo-image" href="index.html">
                            <img src="images/logotexto.svg" alt="alternative"/>
                        </a>
                        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse offcanvas-collapse d-flex justify-content-end" id="navbarsExampleDefault">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#header">
                                        Home <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#intro">
                                        Introdução
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">
                                        Funcionalidades
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#details">
                                        Detalhes
                                    </a>
                                </li>
                            </ul>
                            <span className="nav-item">
                                <a className="btn-solid-sm page-scroll" href="/register">
                                    Cadastre-se
                                </a>
                            </span>
                            <span className="nav-item">
                                <a class="btn-outline-sm page-scroll" href="/login">
                                    Entre
                                </a>
                            </span>
                        </div>
                    </div>
                </nav>

                {/* Header */}
                <header id="header" class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5" style={{position: 'relative'}}>
                                <div class="text-container">
                                    <h1 style={{color: "white"}} class="h1-large">Ajude a melhorar sua cidade cada vez mais!</h1>
                                    <p style={{color: "#ffffffcc"}} class="p-large">Reporte problemas facilmente e contribua para a melhoria da comunidade</p>
                                    <a class="btn-solid-lg" href="/register">Cadastre-se</a>
                                    <a class="btn-outline-lg page-scroll" href="#intro">Saiba Mais</a>
                                </div> 
                            </div> 
                            <div class="col-lg-7" style={{position: 'relative'}}>
                                <div class="image-container">
                                    <img class="img-fluid" src="images/icon-header.png" alt="alternative" style={{marginLeft: "170px", marginTop: "50px", borderRadius: '5%', width: '500px', height: 'auto'}}/>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </header> 

                {/* end of customers */}

                {/* Introduction */}
                <div id="intro" className="basic-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <img style={{width: "700px", borderRadius: '5%'}} className="img-fluid" src="images/fotoReal.png" alt="alternative" />
                            </div>
                            <div className="col-lg-5">
                                <div className="text-container">
                                    <h2>O InfraAlerta ajudará em cada passo desta jornada</h2>
                                    <p>
                                    Acreditamos em uma cidade mais conectada e eficiente, onde cidadãos e prefeitura trabalham juntos para melhorar
                                     a infraestrutura urbana. Toda a nossa experiência e paixão estão no InfraAlerta, e você é convidado a usá-lo para
                                      contribuir com a sua comunidade.
                                    </p>
                                    <a className="btn-solid-reg" href="/register">
                                        Cadastre-se
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of introduction */}

                {/* Features */}
                <div id="features" className="cards-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="h2-heading">Confira todas as funcionalidades</h2>
                                <p className="p-heading">
                                    As funcionalidades integradas ao InfraAlerta foram projetadas para ajudar os cidadãos a relatar problemas
                                    de infraestrutura de maneira eficiente e ajudar a prefeitura a resolvê-los rapidamente.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon">
                                            <span className="fas fa-headphones-alt green"></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Suporte sempre disponível e alerta</h4>
                                        <p>
                                        Suporte sempre disponível, permitindo que entrem em contato facilmente 
                                        com a equipe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon">
                                            <span className="far fa-clipboard blue"></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Controle simples e rápido de relatos</h4>
                                        <p>
                                            Fácil adaptação ao sistema, tornando o processos mais rápidos e eficiente, para o cidadão e para a prefeitura.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon">
                                            <span className="far fa-comments purple"></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Fácil interação com o responsável do relato</h4>
                                        <p>
                                            É possível conversar diretamente com o responsável pelo relato, para tirar dúvidas e
                                            buscar uma solução.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Details 1 */}
                <div id="details" className="basic-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="intro">
                                    <h2>Comece a reportar seus relatos em apenas 2 passos com o InfraAlerta</h2>
                                    <p>
                                    Para transformar a infraestrutura da sua cidade, você precisa de uma ferramenta intuitiva e eficiente. 
                                    Com o InfraAlerta, você pode contar com nossa experiência para relatar problemas de forma rápida e fácil, 
                                    beneficiando tanto a comunidade quanto a administração pública.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="image-container">
                                    <img style={{borderRadius: '5%'}} className="img-fluid" src="images/telacadastro.png" alt="alternative" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text-container">
                                    <div className="section-title">Passo 1</div>
                                    <h2>Crie sua conta</h2>
                                    <p>
                                        Crie sua conta com os devidos dados e informações para começar a reportar problemas em sua cidade.
                                    </p>
                                    <a className="btn-solid-reg popup-with-move-anim" href="/register">
                                        Crie sua conta
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of details 1 */}

                {/* Details Lightbox */}
                <div id="details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
                    <div className="row">
                        <button title="Close (Esc)" type="button" className="mfp-close x-button">
                            ×
                        </button>
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img className="img-fluid" src="images/details-lightbox.jpg" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3>Goals Setting</h3>
                            <hr />
                            <p>
                                The app can easily help you track your personal development evolution if you take the time to set
                                it up.
                            </p>
                            <h4>User Feedback</h4>
                            <p>
                                This is a great app which can help you save time and make your live easier. And it will help
                                improve your productivity.
                            </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="media-body">Splash screen panel</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="media-body">Statistics graph report</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="media-body">Events calendar layout</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="media-body">Location details screen</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-chevron-right"></i>
                                    <div className="media-body">Onboarding steps interface</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg mfp-close page-scroll" href="sign-up.html">
                                Sign Up
                            </a>
                            <button className="btn-outline-reg mfp-close as-button" type="button">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
                {/* end of details lightbox */}

                {/* Details 2 */}
                <div className="basic-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="text-container">
                                    <div className="section-title">Passo 2</div>
                                    <h2>Relate sua queixa</h2>
                                    <p>
                                        Adicione as informações sobre sua queixa de forma rápida e fácil, enviando seu relato diretamente para a prefeitura.
                                    </p>
                                    <a className="btn-outline-reg popup-with-move-anim" href="/register">
                                        Comece agora
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="image-container">
                                    <img style={{width: "500px", borderRadius: '5%'}} className="img-fluid" src="images/detalhesatt.png" alt="alternative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of details 2 */}

                {/* Testimonials */}
                <div className="slider-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="h2-heading">Missão da Equipe InfraAlerta</h2>
                                <p className="p-heading">
                                    Nossa equipe é apaixonada por ajudar a melhorar a infraestrutura urbana e a vida dos cidadãos. 
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="slider-container">
                                    <div className="swiper-container card-slider">
                                        <div className="swiper-wrapper">
                                            {/* Slide */}
                                            <div className="swiper-slide">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                        Nossa missão é conectar cidadãos e prefeituras através de uma comunicação eficiente, 
                                                        promovendo a melhoria contínua da infraestrutura urbana. Valorizamos a transparência, 
                                                        a colaboração e a inovação, com o objetivo de criar cidades mais seguras e bem cuidadas para todos.
                                                        </p>
                                                        <div className="details">
                                                            <img
                                                                className="testimonial-image"
                                                                src="images/missao.jpeg"
                                                                alt="alternative"
                                                            />
                                                            <div className="text">
                                                                <div className="testimonial-author">Equipe InfraAlerta</div>
                                                                <div className="occupation">Unidos por um futuro melhor!</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of testimonials */}

                {/* Newsletter */}
                <div className="form-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="h2-heading">Inscreva-se para ficar por dentro!</h2>
                                <p className="p-heading">
                                    Inscreva-se para receber atualizações e novidades sobre o InfraAlerta.
                                    Junte-se a nós e faça parte da comunidade!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Newsletter Form */}
                                <form>
                                    <div class="form-group mail">
                                        <input type="email" class="form-control-input" id="nemail" required/>
                                        <label class="label-control" for="nemail">Endereço de email</label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="form-control-submit-button">Inscreva-se</button>
                                    </div>
                                    <div class="form-message">
                                        <div id="nmsgSubmit" class="h3 text-center hidden"></div>
                                    </div>
                                </form>
                                {/* end of newsletter form */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of newsletter */}

                {/* Footer */}
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-col first">
                                    <h6>Sobre o InfraAlerta</h6>
                                    <p className="p-small">
                                    O InfraAlerta é um sistema de relato de problemas na infraestrutura urbana, repleto de funcionalidades
                                     como suporte ao cidadão, geração automática de relatórios e mapas interativos 
                                     para visualização dos problemas.
                                    </p>
                                </div>
                                <div className="footer-col second">
                                    <h6>Links</h6>
                                    <ul className="list-unstyled li-space-lg p-small">
                                        <li>
                                            Important: <a href="terms.html">Terms & Conditions</a>,{' '}
                                            <a href="privacy.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            Useful: <a href="#">Colorpicker</a>, <a href="#">Icon Library</a>,{' '}
                                            <a href="#">Illustrations</a>
                                        </li>
                                        <li>
                                            Menu: <a className="page-scroll" href="#header">
                                                Home
                                            </a>
                                            , <a className="page-scroll" href="#intro">
                                                Introdução
                                            </a>
                                            , <a className="page-scroll" href="#features">
                                                Funcionalidades
                                            </a>
                                            , <a className="page-scroll" href="#details">
                                                Detalhes
                                            </a>
                                            , <a className="page-scroll" href="/register">
                                                Cadastre-se
                                            </a>
                                            , <a className="page-scroll" href="/login">
                                                Entre
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-col third">
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-twitter fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-pinterest-p fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <span className="fa-stack">
                                        <a href="#your-link">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-instagram fa-stack-1x"></i>
                                        </a>
                                    </span>
                                    <p className="p-small">
                                        Queremos ouvir sua opinião <a href="mailto:suporte.infraalerta@hotmail.com">
                                            <strong>suporte.infraalerta@hotmail.com</strong>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of footer */}

                {/* Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="p-small">
                                    Copyright © 2024 <a href="#your-link">InfraAlerta</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of copyright */}

                {/* Scripts */}
                <script src="js/jquery.min.js"></script> {/* jQuery for Bootstrap's JavaScript plugins */}
                <script src="js/bootstrap.min.js"></script> {/* Bootstrap framework */}
                <script src="js/jquery.easing.min.js"></script> {/* jQuery Easing for smooth scrolling between anchors */}
                <script src="js/jquery.magnific-popup.js"></script> {/* Magnific Popup for lightboxes */}
                <script src="js/swiper.min.js"></script> {/* Swiper for image and text sliders */}
                <script src="js/scripts.js"></script> {/* Custom scripts */}
            </div>
        </>
    );
}

export default LandingPage;
