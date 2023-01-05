
const DocumentsCar = () => {
    return (
        <>
            <section>
                <div className="container-fluid" style={{ height: "100vh" }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <br />
                            <img className=" container logo" src="../images/logo.png" alt="logo" />
                            <div className="header-login">
                                <h2 style={{ fontWeight: "bold" }}><i class="fa-solid fa-arrow-left" style={{ marginRight: "30px" }}></i>Continue</h2>
                                <p style={{ opacity: "0.6", fontSize: "14px", letterSpacing: "0.1em" }}>Please enter your details</p>
                                <br />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5>Documents</h5>
                                    </div>
                                    <div className="col-lg-6" style={{ fontSize: '14px' }}>
                                        3/4
                                    </div>
                                </div>
                                <div className="container">
                                    <meter value="100"></meter> <meter value="100"></meter> <meter value="100"></meter> <meter value="0"></meter>
                                </div>
                                <br />
                                <p style={{ fontSize: "14px" }}>NIN Number</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    placeholder="Enter first name"
                                    name="firstName"
                                // onChange={handleChange}
                                />
                                <br />
                                <p style={{ fontSize: "14px" }}>Marital Status</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    placeholder="Enter last name"
                                    name="lastName"
                                // onChange={handleChange}
                                />
                                <br />
                                <p style={{ fontSize: "14px" }}>Next of Kin</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    placeholder="e.g Anthony Sikiru"
                                    name="password"
                                // onChange={handleChange}
                                />
                                <br />
                                <p style={{ fontSize: "14px" }}>Next of Kin Phone number</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    placeholder="+234"
                                    name="phoneNumber"
                                // onChange={handleChange}
                                />
                                <br />
                                <p style={{ fontSize: "14px" }}>Guarantor1 Name</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    // placeholder="Enter password"
                                    name="guarantor1 name"
                                // onChange={handleChange}
                                />
                                <br />
                                <p style={{ fontSize: "14px" }}>Guarantor1 Phone Number</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    // placeholder="Enter password"
                                    name="guarantor1 name"
                                // onChange={handleChange}
                                />
                                <br />
                                <p style={{ fontSize: "14px" }}>Guarantor2 Name</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    // placeholder="Enter password"
                                    name="guarantor1Name"
                                // onChange={handleChange}
                                />
                                <br />
                                <p style={{ fontSize: "14px" }}>Guarantor2 Phone Number</p>
                                <input
                                    className="login-input"
                                    type="text"
                                    required
                                    // placeholder="Enter password"
                                    name="guarantor2Phone"
                                // onChange={handleChange}
                                />
                                <br />
                                <input
                                    type="checkbox"
                                />
                                <span style={{ fontSize: "12px" }}>I agree to <span style={{ color: "#FFCD4D" }}>Term of Use & Privacy Policy</span></span>
                                <br />
                                <button className="login">Continue</button>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-6 phase2-legediz">
                            <div className="phase-2-contents">
                                <p>Powered by <i style={{ fontSize: "12px", marginLeft: "10px", color: "#7065F0" }} class="fa-solid fa-bookmark"></i>
                                    <br /> <br />
                                    You agree to Porchplus’s Terms of Use & Privacy Policy. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DocumentsCar