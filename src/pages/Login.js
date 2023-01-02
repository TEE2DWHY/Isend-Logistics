import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
    const [formData, setFormData] = useState({
        phoneNumber: "", password: ""
    })

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <span className="col-lg-6 phase-1">
                            <br />
                            <img className="logo" src="images/logo.png" alt="" />
                            <br /> <br /> <br />
                            <section id="login-form">
                                <div className="header-login">
                                    <h1>Welcome back Victor!</h1>
                                    <form onSubmit={handleSubmit}>
                                        <p style={{ opacity: "0.6", fontSize: "14px", letterSpacing: "0.1em" }}>Please enter your details</p>
                                        <p style={{ fontSize: "14px" }}>Phone number</p>
                                        <input
                                            className="login-input"
                                            type="text"
                                            required
                                            placeholder="+234"
                                            name="phoneNumber"
                                            onChange={handleChange}
                                        />
                                        <br />
                                        <p style={{ fontSize: "14px" }}>Password</p>
                                        <input
                                            className="login-input"
                                            type="password"
                                            required
                                            placeholder="Enter password"
                                            name="password"
                                            onChange={handleChange}
                                        />
                                        <p style={{ color: "#FFCD4D", fontSize: "12px", marginTop: "10px" }}>Forgot Password?</p>
                                        <button className="login">Login</button>
                                        <p style={{ fontSize: "14px", marginTop: "20px" }}>Don’t have an account? <Link to="/sign-up"><span style={{ color: "#FFCD4D" }}> Sign up</span></Link></p>
                                    </form>
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

export default Login