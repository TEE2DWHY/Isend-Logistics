

const SignUp = () => {
    return (
        <>
            <section>
                <div className="container-fluid" style={{ height: "100vh" }}>
                    <div className="row">
                        <span className="col-lg-6 phase-1">
                            <br />
                            <img className="container logo" src="images/logo.png" alt="" />
                            <section id="login-form">
                                <div className="header-login">
                                    <br />
                                    <h1 style={{ fontWeight: "bold" }}>Welcome!</h1>
                                    <p style={{ opacity: "0.6", fontSize: "14px", letterSpacing: "0.1em" }}>Please enter your details</p>
                                    <p style={{ fontSize: "14px" }}>First name</p>
                                    <input
                                        className="login-input"
                                        type="text"
                                        required
                                        placeholder="Enter first name"
                                        name="firstName"
                                    // onChange={handleChange}
                                    />
                                    <br />
                                    <p style={{ fontSize: "14px" }}>Last name</p>
                                    <input
                                        className="login-input"
                                        type="text"
                                        required
                                        placeholder="Enter last name"
                                        name="lastName"
                                    // onChange={handleChange}
                                    />
                                    <br />
                                    <p style={{ fontSize: "14px" }}>Email</p>
                                    <input
                                        className="login-input"
                                        type="email"
                                        required
                                        placeholder="hi@example.com"
                                        name="password"
                                    // onChange={handleChange}
                                    />
                                    <br />
                                    <p style={{ fontSize: "14px" }}>Phone number</p>
                                    <input
                                        className="login-input"
                                        type="text"
                                        required
                                        placeholder="+234"
                                        name="phoneNumber"
                                    // onChange={handleChange}
                                    />
                                    <br />
                                    <p style={{ fontSize: "14px" }}>Password</p>
                                    <input
                                        className="login-input"
                                        type="password"
                                        required
                                        placeholder="Enter password"
                                        name="password"
                                    // onChange={handleChange}
                                    />
                                    <br />
                                    <input
                                        type="checkbox"
                                    />
                                    <span style={{ fontSize: "12px", marginLeft: "5px" }}>I agree to <span style={{ color: "#FFCD4D" }}>Term of Use & Privacy Policy</span></span>
                                    <br />
                                    <button className="login">Sign Up</button>
                                    <br /> <br />
                                    <p style={{ fontSize: "14px" }}>Already have an account? <span style={{ color: "#FFCD4D" }}> Sign in</span></p>
                                </div>
                            </section>
                        </span>
                        <div className="col-lg-6 phase-2">
                            <div className="phase-2-contents">
                                <p>Powered by <i style={{ fontSize: "12px", marginLeft: "10px", color: "#7065F0" }} class="fa-solid fa-bookmark"></i>
                                    <br /> <br />
                                    You agree to Porchplus’s Terms of Use & Privacy Policy. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply. </p></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp