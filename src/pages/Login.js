import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import {loginUrl} from "../config/urls"
import setToken from "../config/session"
import {userName, isLoggedIn, email} from "../config/session"
// images
import logo from "../assets/images/logo.png"


const Login = () => {

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
               [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.querySelector(".spinner-border").classList.toggle("spinner")
        document.querySelector(".login-btn").classList.toggle("btn-visibility")
        try{
            const res = await axios.post(loginUrl, formData)
            setToken("token", res.data.token);
            userName("user", res.data.data.user.full_name);
            email("email", res.data.data.user.email);
            isLoggedIn("loggedIn", true);
            // console.log(res.status);
            if (res.status === 200){
                window.location = "/pick-up"
            }
        }
        //Handling Login Error
        catch (err){
            if(err){
                document.getElementById("login-err").style.display = "block"
                document.querySelector(".login-btn").classList.toggle("btn-visibility")
                document.querySelector(".spinner-border").classList.toggle("spinner")
                console.log(err)
            }
         
        }
        //  console.log(formData)
    }

    //User Error Manager
    const loginError = () =>{
        document.getElementById("login-err").style.display = "none"
    }
    return (
        <>
            <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                </div>
                <br /> <br /> <br />
                <div className="login-container">
                    <Link to="/"><p><i class="fa-solid fa-arrow-left" style={{ fontSize: "14px", marginRight: "10px" }}></i> Home</p></Link>
                    <br /> <br /> <br />
                    <h3 style={{ fontWeight: "bold" }}>Welcome Back!!</h3>
                    <p style={{ color: "#9EA3AE" }}>Let get you back into your account</p>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label style={{ display: "block", fontWeight: "bold" }}>Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                            onClick= {loginError}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px", fontWeight: "bold" }}>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="........"
                            onChange={handleChange}
                            onClick= {loginError}
                            className="login"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <br />
                        <Link to="/forgot-password"><p style={{ textAlign: "center" }}>Forgot password?</p></Link>
                        <br />
                        <p className="login-err" id="login-err">User Authorization Failed. Pls ensure user details are correct🙄.</p>
                        <button className="login-btn" >Login  </button>
                        <div class="spinner-border text-warning" role="status" id="spinner"></div>
                        <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>Don’t have an account? <b><Link to="/auth/sign-up">Sign up</Link> </b></p>
                    </form>
                    <br />
                    <p>You agree to iSend’s <span style={{ color: "#F2C040", lineHeight: "1.2" }}><Link to="/terms-of-use">Terms of Use </Link> & <Link to="/privacy-policy">Privacy Policy</Link></span>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                </div>
            </section>

        </>
    )
}

export default Login