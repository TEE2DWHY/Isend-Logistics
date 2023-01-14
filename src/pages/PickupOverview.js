// import React from 'react'
import { Link } from "react-router-dom"

const PickupOverview = () => {
    return (
        <>
            <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src="images/logo.png" alt="logo" /></Link>
                </div>
                <br />
                <div className="container-fluid" style={{ backgroundColor: "#F2C040" }}>
                    <div className="container">
                        <h2 style={{ fontWeight: "bold", fontSize: "25px", padding: "10px 0" }}>Delivery Overview</h2>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <form>
                                <label style={{ display: "block" }}>Receiver's name</label>
                                <br />
                                <input
                                    type="text"
                                    name="sendersName"
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <label style={{ display: "block", marginTop: "20px" }}>Receiver's address</label>
                                <br />
                                <input
                                    type="text"
                                    name="sendersAddress"
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <label style={{ display: "block", marginTop: "20px" }}>Receiver's Phone Number</label>
                                <br />
                                <input
                                    type="text"
                                    name="sendersPhoneNumber"
                                    placeholder='+234 810-019-4732'
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <label style={{ display: "block", marginTop: "20px" }}>Phone Number</label>
                                <br />
                                <input
                                    type="text"
                                    name="receiversDetails"
                                    placeholder="Add New Receiver Details"
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <br />
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <form>
                                <label style={{ display: "block" }}>Receiver's name</label>
                                <br />
                                <input
                                    type="text"
                                    name="sendersName"
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <label style={{ display: "block", marginTop: "20px" }}>Receiver's address</label>
                                <br />
                                <input
                                    type="text"
                                    name="sendersAddress"
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <label style={{ display: "block", marginTop: "20px" }}>Receiver's Phone Number</label>
                                <br />
                                <input
                                    type="text"
                                    name="sendersPhoneNumber"
                                    placeholder='+234 810-019-4732'
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <label style={{ display: "block", marginTop: "20px" }}>Phone Number</label>
                                <br />
                                <input
                                    type="text"
                                    name="receiversDetails"
                                    placeholder="Add New Receiver Details"
                                    style={{ display: "block", width: "70%", borderRadius: "6px", border: "none", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <br />
                            </form>
                        </div>
                    </div>
                    <br /> <br />
                    <h5>Payment Details</h5>
                    <hr />
                    <div className="row" style={{ marginBottom: "10%" }}>
                        <div className="col-lg-6">
                            <p style={{ className: "14px" }}>
                                If you’re not available when the courier arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered.
                                <br /> <br />
                                <span style={{ color: "#EA2525" }}>Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the shop if you are not available.</span>
                            </p>
                        </div>
                        <div className="col-lg-6" style={{ paddingLeft: "120px" }}>
                            <div className="d1">
                                <p>Subtotal</p>
                                <p>N 2,500.00</p>
                            </div>
                            <div className="d1">
                                <p>Taxes & Other Fees <i class="fa-solid fa-circle-info" style={{ fontSize: "16px" }}></i></p>
                                <p>N 200.00</p>
                            </div>
                            <div className="d1">
                                <p>Service Fee <i class="fa-solid fa-circle-info" style={{ fontSize: "16px" }}></i></p>
                                <p>N 300.00</p>
                            </div>
                            <hr />
                            <div className="d1" style={{ fontWeight: "bold" }}>
                                <p>Total</p>
                                <p>N3,000.00</p>
                            </div>
                            <br />
                            <button className="login-btn">Make Payment</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PickupOverview