

const SignUp = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <span className="col-lg-6 phase-1">
                            <img className="logo" src="images/logo.png" alt="" />
                            <section id="login-form">
                                <div className="header-login">
                                    <h1>Welcome back Victor!</h1>
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
                                    <span style={{ fontSize: "12px" }}>I agree to <span style={{ color: "#FFCD4D" }}>Term of Use & Privacy Policy</span></span>
                                    <br />
                                    <button className="login">Sign Up</button>
                                    <br />
                                    <p style={{ fontSize: "14px" }}>Already have an account? <span style={{ color: "#FFCD4D" }}> Sign in</span></p>
                                </div>
                            </section>
                        </span>
                        <span className="col-lg-6 phase-2">

                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp