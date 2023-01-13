import React from 'react'
import { Link } from 'react-router-dom'

const DeliveryDetails = () => {
    return (
        <>
            <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src="images/logo.png" alt="logo" /></Link>
                </div>
                <br /> <br /> <br />
                <div className="pickup-container">
                    <h3 style={{ fontWeight: "bold", textAlign: "center" }}>Delivery Details</h3>
                    <br />
                    <form>
                        <label style={{ display: "block" }}>Receiver's name</label>
                        <br />
                        <input
                            type="text"
                            name="sendersName"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Receiver's address</label>
                        <br />
                        <input
                            type="text"
                            name="sendersAddress"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Receiver's Phone Number</label>
                        <br />
                        <input
                            type="text"
                            name="sendersPhoneNumber"
                            placeholder='+234 810-019-4732'
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Phone Number</label>
                        <br />
                        <input
                            type="text"
                            name="receiversDetails"
                            placeholder="Add New Receiver Details"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <br /> <br /> <br />
                        <button className="login-btn">Next</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default DeliveryDetails