import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const TrackOverview = () => {
    const paymentStatus = () =>{
        document.getElementById("pending").style.display = "none"
        document.getElementById("confirmed").style.display = "inline"
        document.getElementById("order-note-confirmed").style.display = "block"
        document.getElementById("order-note").style.display = "none"
    }
    const copy = ()=>{
        var copyId = document.getElementById("id").innerHTML;
        // console.log(copyId)
        navigator.clipboard.writeText(copyId)
        alert("Tracking Id: " + copyId + " is copied.")
    }
    return (
        <>
            <Navbar />
            <br /> <br /> <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="status">
                            <h4>Payment Status <button className="pending-btn" id="pending" onClick={paymentStatus}>Pending</button> <button className="confirmed-btn" id="confirmed">Confirmed</button></h4>
                            <hr />
                            <p style={{ fontWeight: "bold" }}>Tracking ID: <span style={{marginLeft:"10px"}} id="id">18309485DNKFSMJWK</span> <span className="copy" onClick={copy}><i class="fa-regular fa-copy" style={{fontSize:"15px"}}></i></span></p>
                     </div>
                        <br/>
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
                        <div className="status">
                            <h4>Status</h4>
                            <hr />
                            <p>Package is out of delivery</p>
                            <p style={{ fontSize: "12px" }}>Sam is on his way with your package  to no 3 idowu emma street ..</p>
                            <meter value="1" /> <meter value="1" /> <meter value="1" /> <meter value="0" />
                            <p style={{ fontSize: "12px", fontStyle: "italic" }}>Estimated delivery time : 4:00PM -  6:00PM</p>
                        </div>
                        <br />
                        {/* Delivery Personnel */}
                        <div className="status">
                            <h4>Delivery Personnel</h4>
                            <hr />
                            <p style={{ fontWeight: "bold" }}>Waden Warren</p>
                            <p style={{ fontSize: "12px" }}>Sam is on his way with your package  to no 3 idowu emma street ..</p>
                            <meter value="1" /> <meter value="1" /> <meter value="1" /> <meter value="0" />
                            <p style={{ fontSize: "12px", fontStyle: "italic" }}>Estimated delivery time : 4:00PM -  6:00PM</p>
                        </div>
                        <br />
                        {/* Delivery Updates */}
                        <div className="delivery-updates">
                            <h4>Delivery Updates</h4>
                            <hr />
                            <div className="d1">
                                <p className="p1">12:32</p> <p className="p2">The agent picked up your package </p>
                            </div>
                            <div className="d1">
                                <p className="p1">01:32</p> <p className="p2">Package reached Ajah fulfillment center</p>
                            </div>
                            <div className="d1">
                                <p className="p1">02:32</p> <p className="p2">Sam picked up your package from ajah</p>
                            </div>
                            <div className="d1">
                                <p className="p1">03:32</p> <p className="p2">Sam is on his way</p>
                            </div>
                            <div className="d1">
                                <p className="p1">03:32</p> <p className="p2">Sam is on his way</p>
                            </div>
                            <div className="d1">
                                <p className="p1">03:32</p> <p className="p2">Sam is on his way</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/> <br/>
                <p className="order-note" id="order-note">Please note that you can only cancel your order before the package is picked up by the delivery rider. <button className="btn btn-outline-danger" style={{marginLeft:"40px"}}>Cancel order</button>  </p>
                <br/> <br/>
                <p id="order-note-confirmed">Please contact our customer support for any other issue  at  08023458368 </p>
            </div>
            <Footer />
        </>
    )
}

export default TrackOverview