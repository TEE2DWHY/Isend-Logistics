import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
// const dotenv = require("dotenv")
// dotenv.config()
const SignUp = () => {

    const [formData, setFormData] = useState({
        full_name:"", email:"", phone_number:"", password:""
    })

    const handleChange = (e)=>{
        setFormData((prevFormData)=>{
          return{
            ...prevFormData,
            [e.target.name] : e.target.value
        } 
        })

        }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("spinner").style.display = "block"
        document.getElementById("sign-up").style.display = "none"
        try{
            const res = await axios.post("https://isend-api-v1.herokuapp.com/api/v1/users/signup", formData)
            if (res.status === 200){
            document.getElementById("signup-confirmation").style.display = "block"
         }
        }catch (err){
            alert(err.response.data.message)
            // window.location.reload()
            document.getElementById("spinner").style.display = "none"
            document.getElementById("sign-up").style.display = "block"
        }
    }
    
    return (
        <>
            <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src="/images/logo.png" alt="logo" /></Link>
                </div>
                <br /> <br /> <br />
                <div className="login-container">
                    <Link to="/"><p><i class="fa-solid fa-arrow-left" style={{ fontSize: "14px", marginRight: "10px" }}></i> Home</p></Link>
                    <h3 className="welcome-h1">Welcome Back!!</h3>
                    <p>Let's get you back into your account</p>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label style={{ display: "block" }}>Full name</label>
                        <br />
                        <div>
                            <input
                            type="text"
                            name="full_name"
                            placeholder="First name and Last name"
                            onChange={handleChange}
                            required
                            pattern="^[A-Za-z\s]*$"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                            />
                            <span></span>
                        </div>
                        <label style={{ display: "block", marginTop: "20px" }}>Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="hi@example.com"
                            onChange={handleChange}
                            required
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <span className="user-err" id="user-err" style={{fontSize:"14px"}}>{formData.email} is already used. Pls try another</span>
                        <label style={{ display: "block", marginTop: "20px" }}>Phone Number</label>
                        <br />
                        <div>
                        <input
                            className="input"
                            type="text"
                            name="phone_number"
                            placeholder="+2348100000000"
                            onChange={handleChange}
                            required
                            // pattern="^(?:\+|00)(1|7|2[07]|3[0123469]|4[013456789]|5[12345678]|6[0123456]|8[1246]|9[0123458]|(?:2[12345689]|3[578]|42|5[09]|6[789]|8[035789]|9[679])\d)*$"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        {/* <span className="user-err">Phone Numbers should start with +234 and should be a minimum of 13 characters</span> */}
                        </div>
                        <label style={{ display: "block", marginTop: "20px" }}>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            required
                            pattern=".{8,}"
                            style={{ display:"block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                              {/* <i className="fa-solid fa-eye password-icons" id="password-reveal"></i> */}

                        <br />

                        <button className="login-btn" id="signup"><span id="sign-up">Sign up</span> <i style={{ fontSize: "19px", paddingLeft: "10px" }} class="fas fa-spinner fa-spin" id="spinner"></i></button>
                        <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>Already have an account? <Link to="/auth/login"><b>Sign in </b></Link></p>
                        {/* <p className='signup-confirmation' id="signup-confirmation">An  email verification has been sent to {formData.email}</p> */}
                        {/* {error.data.message} */}
                    </form>
                    <br />
                    <p>Powered by <img src="/images/logo.png" alt="logo" style={{width:"50px", height:"14.82px", marginLeft:"3px"}}/></p>
                    <p>You agree to iSend’s <Link to="/privacy-policy"><span style={{ color: "#F2C040", lineHeight: "1.2" }}>Terms of Use & Privacy Policy</span></Link>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                </div>
            </section>
        </>
    )
}

export default SignUp