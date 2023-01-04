import React from 'react'

const DeliveryDetails = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <span className="col-lg-6 phase-1">
                            <br />
                            <img className="container logo" src="images/logo.png" alt="" />
                            <br /> <br />
                            <section id="login-form">
                                <div className="header-login">
                                    <h2 style={{ fontWeight: "bold" }}><i class="fa-solid fa-arrow-left" style={{ marginRight: "30px" }}></i>Delivery Details</h2>
                                    <form style={{ marginTop: "20px" }}>
                                        <p style={{ fontSize: "14px" }}>Senders Name</p>
                                        <input
                                            className="login-input"
                                            type="text"
                                            required
                                            placeholder="Enter full name"
                                            name="fullName"
                                        // onChange={handleChange}
                                        />
                                        <br />
                                        <p style={{ fontSize: "14px", marginTop: "10px" }}>Senders address</p>
                                        <input
                                            className="login-input"
                                            type="text"
                                            required
                                            placeholder="Enter address"
                                            name="address"
                                        // onChange={handleChange}
                                        />
                                        <br />
                                        <p style={{ fontSize: "14px", marginTop: "10px" }}>Senders phoneNumber</p>
                                        <input
                                            className="login-input"
                                            type="text"
                                            required
                                            placeholder="+234"
                                            name="phoneNumber"
                                        // onChange={handleChange}
                                        />
                                        <br />
                                        <p style={{ color: "#FFCD4D", fontSize: "12px", marginTop: "2px" }}>Forgot Password?</p>
                                        <button className="login">Save</button>
                                    </form>
                                </div>
                            </section>
                        </span>
                        <span className="col-lg-6 phase-2">
                            <div className="phase-2-contents">
                                <p>Powered by <i style={{ fontSize: "12px", marginLeft: "10px", color: "#7065F0" }} class="fa-solid fa-bookmark"></i>
                                    <br /> <br />
                                    You agree to Porchplus’s Terms of Use & Privacy Policy. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply. </p>
                            </div>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DeliveryDetails