import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            {/* Navbar Section */}
            <Navbar />
            {/* ---------------------------------------------------------------------------------------------------- */}
            {/* Hero Section */}
            <section id="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1><span className="cheap">Cheapest </span>& Trusted delivery service</h1>
                            <p>The fastest and most affordable delivery platform made just for you. Sign up for an efficient and hassle-free experience. </p>
                            <button className="cta">Schedule a delivery</button>
                        </div>
                        <div className="col-lg-6">
                            <div className="rectangle"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------------------- */}
            {/* Features Section */}
            <section id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h3>Our features you can get </h3>
                        </div>
                        <div className="col-lg-7">
                            <p>Lorem ipsum dolor sit amet consectetur. Ut cursus semper ut lectus. Suspendisse consectetur quisque pellentesque tincidunt massa interdum nisl. </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-3">

                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            {/* Partner-Section */}
            <section id="partner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Become a Partner</h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet pulvinar ac nulla risus. Ac nisl enim sodales ut enim bibendum vestibulum.</p>
                            <button className="partner">Partner with us </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="rectangle2"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------------------------------------------------------------------- */}
            {/* FAQ */}
            <section id="faq">
                <div className="container">
                    <h3>Frequently Asked Questions</h3>
                    <br />
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Which is the cheapest mode?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam tempus ipsum, feugiat urna risus cursus porta dui.Ultrices quis adipiscing pharetra venenatis.In egestas sapien ac mollis adipiscing in auctor. </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    What are your delivery rates?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Can I pay on delivery?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="sign-up">

            </section>
        </>
    )
}

export default Home