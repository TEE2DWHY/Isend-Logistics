import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
                        </div>
                        <div className="col-lg-6">
                            <div className="privacy-rectangle"></div>
                        </div>
                    </div>
                    <br /> <br />
                    <p>Last Updated: January 1st, 2023</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Privacy