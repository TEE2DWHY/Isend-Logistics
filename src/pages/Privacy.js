import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import privacy from "../assets/images/privacy.png"
// get current date
const date = new Date().getDate();
// get current month
const month = new Date().getMonth();
// get current year
const year = new Date().getFullYear()

const Privacy = () => {
    return (
        <>
            <Navbar />
            {/* ---------------------------------------------------------------------------------- */}
            {/* Privacy-Policy */}
            <section id="privacy-policy">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Privacy Policy</h1>
                            <p className="privacy-policy-p">Please note that your use of and access to the services (as defined below) are subject to the following terms;
                                if you do not agree to all of these terms, you may not use or access the services in any manner.</p>
                            <br /> <br />
                            <p>Last Updated: {month}-{date}-{year}</p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid terms-privacy" src={privacy} alt="privacy-img" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Privacy