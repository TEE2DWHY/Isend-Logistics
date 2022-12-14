import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const OurCenters = () => {
    return (
        <>
            <Navbar />
            {/* ----------------------------------------------------------------------------- */}
            <section id="our-centers">
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Our Fulfilment Centres</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <h5>Our Centers</h5>
                            <br />
                            <h6 >Surulere Branch</h6>
                            <br /> <br />
                            <h6>Ajah Branch</h6>
                            <br /> <br />
                            <h6>Ikorodu Branch</h6>
                        </div>
                        <div className="col-lg-6">
                            <h5>Address</h5>
                            <br />
                            <h6>38 Owokoniran Close, Off Akobi Crescent,
                                Surulere </h6>
                            <br /> <br />
                            <h6>Oba Elegushi Estate, Road 2, Ilaje, Ajah</h6>
                            <br /> <br />
                            <h6>Oba Elegushi Estate, Road 2, Ilaje, Ajah</h6>
                        </div>
                        <div className="col-lg-2">
                            <h5>Contact Details</h5>
                            <br />
                            <h6>080383213112</h6>
                            <br /> <br />
                            <h6>080383213112</h6>
                            <br /> <br />
                            <h6>080383213112</h6>
                        </div>
                        <div className="col-lg-2">
                            <h5>Working Hours</h5>
                            <br />
                            <h6>9:00 am - 5:00 pm</h6>
                            <br /> <br />
                            <h6>9:00 am - 5:00 pm</h6>
                            <br /> <br />
                            <h6>9:00 am - 5:00 pm</h6>
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
            <Footer />
        </>
    )
}

export default OurCenters