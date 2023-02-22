import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import rectangle from "../assets/images/Rectangle 6286.png"


const Terms = () => {
    return (
        <>
            <Navbar />
            {/* -------------------------------------------------------------------------------- */}
            {/* Term-of-Use */}
            <section id="terms-header">
                <div className="container">
                    <div className="row" style={{ marginTop: "5%" }}>
                        <div className="col-lg-6">
                            <h1 className="terms-h1">Terms of Use</h1>
                            <p className="terms-p1">Please note that your use of and access to the services (as defined below) are subject to the following terms;
                                if you do not agree to all of these terms, you may not use or access the services in any manner.</p>
                            <br /> <br />
                            <p>Last Updated: January 1st, 2023</p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid" src={rectangle} alt="rectangle-img" />
                        </div>
                    </div>
                </div>
            </section>
            <br/> <br/>
            <Footer />
        </>
    )
}

export default Terms