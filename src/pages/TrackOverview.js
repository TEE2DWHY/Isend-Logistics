import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const TrackOverview = () => {
    return (
        <>
            <Navbar />
            <br /> <br /> <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="package-details">
                            <h4>Package Details</h4>
                            <hr />
                            <div className="d1">
                                <p className="p1">Category</p> <p className="p2">Electronics</p>
                            </div>
                            <div className="d1">
                                <p className="p1">From</p> <p className="p2">4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                            <div className="d1">
                                <p className="p1">To</p> <p className="p2">2715 Ash Dr. San Jose, South Dakota 83475</p>
                            </div>
                            <div className="d1">
                                <p className="p1">Receiver</p> <p className="p2">Bessie Cooper</p>
                            </div>
                            <div className="d1">
                                <p className="p1">Receiver Number</p> <p className="p2">(308) 555-0121</p>
                            </div>
                            <div className="d1">
                                <p className="p1">Delivery note</p> <p className="p2">Please make sure to call  for me to give access code at the gate </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TrackOverview