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
                                        Intro
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#details">
                                        Details
                                    </a>
                                </li>
                            </ul>
                            <span className="nav-item">
                                <a className="btn-solid-sm page-scroll" href="/register">
                                    Cadastre-se
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

                {/* Customers */}
                <div className="slider-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4>
                                    Brands and shops that use <span>Kora</span> to grow their business
                                </h4>
                                <hr className="section-divider" />

                                {/* Image Slider */}
                                <div className="slider-container">
                                    <div className="swiper-container image-slider">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img className="img-fluid" src="images/customer-logo-1.png" alt="alternative" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img className="img-fluid" src="images/customer-logo-2.png" alt="alternative" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img className="img-fluid" src="images/customer-logo-3.png" alt="alternative" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img className="img-fluid" src="images/customer-logo-4.png" alt="alternative" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img className="img-fluid" src="images/customer-logo-5.png" alt="alternative" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img className="img-fluid" src="images/customer-logo-6.png" alt="alternative" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of image slider */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of customers */}

                {/* Introduction */}
                <div id="intro" className="basic-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <img className="img-fluid" src="images/introduction.jpg" alt="alternative" />
                            </div>
                            <div className="col-lg-5">
                                <div className="text-container">
                                    <h2>Kora is here to help you grow your online shop</h2>
                                    <p>
                                        We believe in sustainable and trustful ecommerce which offers opportunities for both
                                        shop owners and customers. Our entire experience and passion can be found in Kora and
                                        you are invited to use it for your business
                                    </p>
                                    <a className="btn-solid-reg" href="sign-up.html">
                                        Sign up
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
                                <h2 className="h2-heading">Check out all the features</h2>
                                <p className="p-heading">
                                    The features built into Kora were designed to help online shop owners present their
                                    merchandise and find more customers
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Card */}
                                <div className="card">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon">
                                            <span className="fas fa-headphones-alt green"></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Product Marketing On Social Platforms</h4>
                                        <p>
                                            Besides regular product display options Kora has multiple functions for social
                                            networks integration
                                        </p>
                                        <a className="read-more no-line" href="article.html">
                                            Learn more <span className="fas fa-long-arrow-alt-right"></span>
                                        </a>
                                    </div>
                                </div>
                                {/* end of card */}

                                {/* Card */}
                                <div className="card">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon">
                                            <span className="far fa-clipboard blue"></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Branding And Strategy Basic Guidelines</h4>
                                        <p>
                                            To build a solid foundation for your online shop you need a strong brand and a
                                            bulletproof strategy
                                        </p>
                                        <a className="read-more no-line" href="article.html">
                                            Learn more <span className="fas fa-long-arrow-alt-right"></span>
                                        </a>
                                    </div>
                                </div>
                                {/* end of card */}

                                {/* Card */}
                                <div className="card">
                                    <div className="card-icon-wrapper">
                                        <div className="card-icon">
                                            <span className="far fa-comments purple"></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Design & Development Advanced Services</h4>
                                        <p>
                                            Our team of competent designers and developers are able to create great designs and
                                            structured code
                                        </p>
                                        <a className="read-more no-line" href="article.html">
                                            Learn more <span className="fas fa-long-arrow-alt-right"></span>
                                        </a>
                                    </div>
                                </div>
                                {/* end of card */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of features */}

                {/* Details 1 */}
                <div id="details" className="basic-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="intro">
                                    <h2>Start a successful ecommerce business in no more than 3 easy steps with Kora</h2>
                                    <p>
                                        To build a solid foundation for your online shop you need a strong brand and a
                                        bulletproof strategy. You can rely on our experience to create a beautiful and efficient
                                        online shop that offers benefits for both the shop brand and loyal customers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="image-container">
                                    <img className="img-fluid" src="images/details-1.png" alt="alternative" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text-container">
                                    <div className="section-title">Step 1</div>
                                    <h2>Figure out what to sell</h2>
                                    <p>
                                        Delivering powerful brands for popular shops while creating beautiful concepts and
                                        evocative logos. Use the opportunity to prepare complete style guides
                                    </p>
                                    <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox">
                                        Lightbox
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
                                    <div className="section-title">Step 2</div>
                                    <h2>Analyze the marketplace</h2>
                                    <p>
                                        Our team of competent designers and developers are able to create beautiful designs and
                                        structured code that will serve your ecommerce project on the long term
                                    </p>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Delivering powerful brands for popular shops</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Creating beautiful concepts and evocative logos</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Preparing complete branding guides and styles</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="image-container">
                                    <img className="img-fluid" src="images/details-2.png" alt="alternative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of details 2 */}

                {/* Details 3 */}
                <div className="basic-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="image-container">
                                    <img className="img-fluid" src="images/details-3.png" alt="alternative" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text-container">
                                    <div className="section-title">Step 3</div>
                                    <h2>Create your shop account</h2>
                                    <p>
                                        We can deliver a comprehensive marketing plan and then execute it down to the smallest
                                        details. To start using Kora just sign up and submit your details
                                    </p>
                                    <a className="btn-solid-reg" href="sign-up.html">
                                        Sign up now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of details 3 */}

                {/* Testimonials */}
                <div className="slider-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="h2-heading">Few words from shop owners</h2>
                                <p className="p-heading">
                                    You can read below a few testimonials from satisfied shop owners. Of course there are also
                                    some unhappy ones but they're not here
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
                                                            I am happy to have chosen Blink for our shop implementation. Their
                                                            specialized experience helped the project and made it available 2
                                                            weeks prior the launch date for extensive testing
                                                        </p>
                                                        <div className="details">
                                                            <img
                                                                className="testimonial-image"
                                                                src="images/testimonial-1.jpg"
                                                                alt="alternative"
                                                            />
                                                            <div className="text">
                                                                <div className="testimonial-author">Samantha Bloom</div>
                                                                <div className="occupation">Team Leader - Syncnow</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of swiper-slide */}

                                            {/* Slide */}
                                            <div className="swiper-slide">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            Totally recommended. I am happy to have chosen Blink for our shop
                                                            implementation. Their great specialized experience helped the project
                                                            and made it available 2 weeks prior the launch
                                                        </p>
                                                        <div className="details">
                                                            <img
                                                                className="testimonial-image"
                                                                src="images/testimonial-2.jpg"
                                                                alt="alternative"
                                                            />
                                                            <div className="text">
                                                                <div className="testimonial-author">Nicolas Richter</div>
                                                                <div className="occupation">Manager - Firstup</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of swiper-slide */}

                                            {/* Slide */}
                                            <div className="swiper-slide">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            I am happy to have chosen Blink for our shop implementation. Their
                                                            specialized experience helped the project and made it available 2
                                                            weeks prior the launch date for extensive testing
                                                        </p>
                                                        <div className="details">
                                                            <img
                                                                className="testimonial-image"
                                                                src="images/testimonial-3.jpg"
                                                                alt="alternative"
                                                            />
                                                            <div className="text">
                                                                <div className="testimonial-author">Mary Longhorn</div>
                                                                <div className="occupation">Designer - Firstdev</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of swiper-slide */}

                                            {/* Slide */}
                                            <div className="swiper-slide">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            Totally recommended. I am happy to have chosen Blink for our shop
                                                            implementation. Their great specialized experience helped the project
                                                            and made it available 2 weeks prior the launch
                                                        </p>
                                                        <div className="details">
                                                            <img
                                                                className="testimonial-image"
                                                                src="images/testimonial-4.jpg"
                                                                alt="alternative"
                                                            />
                                                            <div className="text">
                                                                <div className="testimonial-author">Mike Page</div>
                                                                <div className="occupation">Developer - Chainlink</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of swiper-slide */}

                                            {/* Slide */}
                                            <div className="swiper-slide">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            I am happy to have chosen Blink for our shop implementation. Their
                                                            specialized experience helped the project and made it available 2
                                                            weeks prior the launch date for extensive testing
                                                        </p>
                                                        <div className="details">
                                                            <img
                                                                className="testimonial-image"
                                                                src="images/testimonial-5.jpg"
                                                                alt="alternative"
                                                            />
                                                            <div className="text">
                                                                <div className="testimonial-author">Susanne Blake</div>
                                                                <div className="occupation">Operations - Launchday</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of swiper-slide */}

                                            {/* Slide */}
                                            <div className="swiper-slide">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="testimonial-text">
                                                            Totally recommended. I am happy to have chosen Blink for our shop
                                                            implementation. Their great specialized experience helped the project
                                                            and made it available 2 weeks prior the launch
                                                        </p>
                                                        <div className="details">
                                                            <img
                                                                className="testimonial-image"
                                                                src="images/testimonial-6.jpg"
                                                                alt="alternative"
                                                            />
                                                            <div className="text">
                                                                <div className="testimonial-author">Vanya Dropper</div>
                                                                <div className="occupation">Marketer - Flinco</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of swiper-slide */}
                                        </div>

                                        {/* Add Arrows */}
                                        <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                        {/* end of add arrows */}
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
                                <h2 className="h2-heading">Subscribe And Follow Us</h2>
                                <p className="p-heading">
                                    Be part of the story and follow us on Twitter via <a href="#your-link">@name</a> and
                                    subscribe to the newsletter for news and updates about our workshops
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Newsletter Form */}
                                <form>
                                    <div className="form-group mail">
                                        <input type="email" className="form-control-input" id="nemail" required />
                                        <label className="label-control" htmlFor="nemail">
                                            Email address
                                        </label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control-submit-button">
                                            Subscribe
                                        </button>
                                    </div>
                                    <div className="form-message">
                                        <div id="nmsgSubmit" className="h3 text-center hidden"></div>
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
                                    <h6>About Kora</h6>
                                    <p className="p-small">
                                        Kora is a SaaS app website Bootstrap HTML template packed with features like logo
                                        slider, details lightbox, testimonial slider dropdown
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
                                                Intro
                                            </a>
                                            , <a className="page-scroll" href="#features">
                                                Features
                                            </a>
                                            , <a className="page-scroll" href="#details">
                                                Details
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
                                        We would love to hear from you <a href="mailto:contact@site.com">
                                            <strong>contact@site.com</strong>
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
                                    Copyright © <a href="#your-link">Your name</a>
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
