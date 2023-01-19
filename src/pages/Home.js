import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import offers from "../Data"
import { Link } from "react-router-dom"

function Home() {

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
                            <h1 className="hero-section-h1"><span className="cheap">Affordable </span>& Trusted delivery service</h1>
                            <p>The fastest and most affordable delivery platform made just for you. Sign up for an efficient and hassle-free experience. </p>
                            <Link to="/pick-up"><button className="cta">Book a delivery</button></Link>
                        </div>
                        <div className="col-lg-6">
                            <img className="isend-img1" src="images/isend-img1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------------------------------------------------------------------------------------------------- */}
            {/* What We Offer */}
            <section id="what-we-offer">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{display:"block", margin:"auto 0"}}>
                    <h2><b>What We Offer</b></h2>
                    <p>Get your orders dispatched and delivered within 24 hours. </p>
                    <br /> <br />
                    </div>
                    <div className="col-lg-6">
                    <div className="row">
                        {offers.map((items) => (
                            <div className="col-lg-6 offers-container">
                                <div>
                                    <img className="offers-img" src={items.image} alt="" />
                                </div>
                                <h5><b>{items.text}</b></h5>
                                <p>{items.paragraph}</p>
                            </div>
                        ))}
                    </div>  
                        </div>
                </div>   
                </div>
            </section>
            {/* --------------------------------------------------------------------------------------------- */}
            {/* Partner-Section */}
            <section id="partner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Become a Partner</h3>
                            <br />
                            <p>Own a car? A motorcycle? A truck? Are you looking to multiply your source of income? With just 5 steps, begin your journey to financial fulfillment.</p>
                            <button className="partner">Partner with us </button>
                        </div>
                        <div className="col-lg-6">
                            <img className="partner-img" src="images/sync.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------------------- */}
            {/* what-customers-say */}
            <section id="what-customers-say">
                <div className="container">
                    <h2 className="what-customers-say">What our Customers say</h2>
                    <p className="what-customers-say-p1">See what our customers, riders, and vendors have to say about us</p>
                    <br /> <br />
                    <p className="what-customers-say-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam tempus ipsum, feugiat urna risus cursus porta dui. Ultrices quis adipiscing pharetra venenatis.
                        In egestas sapien ac mollis adipiscing in auctor.</p>
                    <p>Mira Culos, <span style={{ opacity: "0.6" }}>Customer</span></p>
                    <br />
                    <img src="images/Frame.png" alt="" />
                </div>
            </section>
            {/* ---------------------------------------------------------------------------------------------- */}
            {/* FAQ */}
            <section id="faq">
                <div className="container">
                    <h3>Frequently Asked Questions</h3>
                    <br />
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Which is the cheapest mode?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam tempus ipsum, feugiat urna risus cursus porta dui.Ultrices quis adipiscing pharetra venenatis.In egestas sapien ac mollis adipiscing in auctor. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    What are your delivery rates?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Can I pay on delivery?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
            <section id="join-team">
                <br /> <br />
                <img className="ellipse1" src="images/Ellipse 298.png" alt="" /><h1 className="join-team-h1">Join Our Team </h1><img className="ellipse2" src="images/Ellipse 298.png" alt="" />
                <p className="join-team-p1">Help us on our quest to make life better for our customers</p>
                <br />
                <button className="sco-button">See Current Openings</button>
                <br /> <br /> <br />
                <img className="ellipse1" src="images/Ellipse 298.png" alt="" /> <img className="ellipse2" src="images/Ellipse 298.png" alt="" />
            </section>
            {/* ---------------------------------------------------------------------------------------------------- */}
            {/* Footer-Section */}
            <Footer />
        </>
    )
}

export default Home