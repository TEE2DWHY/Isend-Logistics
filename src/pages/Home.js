import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
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
        </>
    )
}

export default Home