import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Blog = () => {
    return (
        <>
            <Navbar />
            <h1 className="blog-header">Blog</h1>
            {/* ---------------------------------------------------------------------------------------------- */}
            {/* Safety-Tips for Delivery */}
            <section id="safety-tips">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>10 Safety tips for Delivery</h3>
                            <p className="blog-safety-tips-p1">Please note that your use of and access to the services (as defined below) are subject to the following terms;
                                if you do not agree to all of these terms, you may not use or access the services in any manner.</p>
                            <p className="blog-safety-tips-p2">Dec 20, 2022</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="rectangle-blog1"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------------------------------------------------------------------------------------------- */}
            <h3 className="read-latest">Read Latest Collection</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="rectangle-blog2"></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rectangle-blog2"></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rectangle-blog2"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog