import { Link } from "react-router-dom"

const LoginCar = () => {
    return (
        <>
            <section>
                <div className="container-fluid" style={{ height: "100vh" }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <br />
                            <img className="logo" src="../images/logo.png" alt="logo" />
                            <div className="header-login" style={{ marginTop: "17%" }}>
                                <h1>Welcome back Victor!</h1>
                                <form>
                                    <p style={{ opacity: "0.6", fontSize: "14px", letterSpacing: "0.1em" }}>Please enter your details</p>
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
                                    <p style={{ color: "#FFCD4D", fontSize: "12px", marginTop: "10px" }}>Forgot Password?</p>
                                    <button className="login">Login</button>
                                    <p style={{ fontSize: "14px", marginTop: "20px" }}>Don’t have an account? <Link to="/sign-up"><span style={{ color: "#FFCD4D" }}> Sign up</span></Link></p>
                                </form>
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

export default LoginCar