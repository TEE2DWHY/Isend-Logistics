import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <>
            <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src="images/logo.png" alt="logo" /></Link>
                </div>
                <br /> <br /> <br />
                <div className="login-container">
                    <Link to="/"><p><i class="fa-solid fa-arrow-left" style={{ fontSize: "14px", marginRight: "10px" }}></i> Home</p></Link>
                    <h3 style={{ fontWeight: "bold" }}>Welcome Back!!</h3>
                    <p>Let get you back into your account</p>
                    <br />
                    <form>
                        <label style={{ display: "block" }}>Full name</label>
                        <br />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="First name and Last name"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Email</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="hi@example.com"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Email</label>
                        <br />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="+234"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Email</label>
                        <br />
                        <input
                            type="text"
                            name="password"
                            placeholder="password"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <br />
                        <p style={{ textAlign: "center" }}>Forgot password</p>
                        <br />
                        <button className="login-btn">Sign up</button>
                        <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>Already have an account? <Link to="/login"><b>Sign in </b></Link></p>
                    </form>
                    <br />
                    <p>You agree to iSend’s <Link to="/privacy-policy"><span style={{ color: "#F2C040", lineHeight: "1.2" }}>Terms of Use & Privacy Policy</span></Link>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                </div>
            </section>
        </>
    )
}

export default SignUp