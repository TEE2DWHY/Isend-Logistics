import React from 'react'

const Success = () => {
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
                                    <h2 style={{ fontWeight: "bold" }}>Finished!</h2>
                                    <p style={{ opacity: "0.6", fontSize: "14px", letterSpacing: "0.1em" }}>You're done!</p>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 style={{ fontWeight: "bold", fontSize: "14px" }}>Registration completed</h5>
                                        </div>
                                        <div className="col-lg-6" style={{ fontSize: '14px' }}>
                                            4/4
                                        </div>
                                    </div>
                                    <div className="container">
                                        <meter value="100"></meter> <meter value="100"></meter> <meter value="100"></meter> <meter value="100"></meter>
                                    </div>
                                    <br />
                                    <img className="img-fluid" src="../images/rectangle.png" alt="" />
                                    <br /> <br />
                                    <p style={{ fontSize: "14px" }}>Please note that our personnel will need to verify this.
                                        <br /> A response will be sent within 24hours.</p>

                                    <button className="login">Sign Up</button>
                                    <br /> <br />
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

export default Success