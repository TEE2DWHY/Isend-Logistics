import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { signUpUrl } from "../config/urls";
// images
import logo from "../assets/images/logo.png"

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
        document.querySelector(".spinner-border").classList.toggle("spinner")
        document.getElementById("signup").style.display = "none"
        try{
            const res = await axios.post(signUpUrl, formData)
            if (res.status === 200){
            document.getElementById("signup-confirmation").style.display = "block"
         }
        }catch (err){
            document.querySelector(".signup-err").classList.add("err-visibility");
            document.querySelector(".spinner-border").classList.toggle("spinner")
            document.getElementById("signup").style.display = "block"
        }
    }

    // handleError
    const handleError = () =>{
        document.querySelector(".signup-err").classList.remove("err-visibility")
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
                    <h5>Get started on your journey with us.</h5>
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
                                className="sign-up"
                                onClick={handleError}
                            />
                            <span className="input-err"> Full name should only contain alphabets</span>
                        </div>
                        <div>
                        <label style={{ display: "block", marginTop: "20px" }}>Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="hi@example.com"
                            onChange={handleChange}
                            required
                            className="sign-up"
                            onClick={handleError}
                        />
                            <span className="input-err">Enter a valid email address e.g johndoe@gmail.com</span>
                        </div>
                        <label style={{ display: "block", marginTop: "20px" }}>Phone Number</label>
                        <br />
                        <div>
                        <input
                            className="sign-up"
                            type="text"
                            name="phone_number"
                            placeholder="08100000000"
                            onChange={handleChange}
                            required
                            pattern="^[0-9]*$"
                            onClick={handleError}
                        />
                        <span className="input-err">Can only contain numbers between 0-9</span>
                        </div>
                        <div>
                            <label style={{ display: "block", marginTop: "20px" }}>Password</label>
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={handleChange}
                                required
                                pattern=".{8,}"
                                className="sign-up"
                                onClick={handleError}
                            />
                            <span className="input-err">Password should be a minimum of 8 digits</span>
                        </div>
                        <br />
                        <span className="signup-err" id="signup-err">An error occurred...</span>
                        <button className="login-btn" id="signup">Sign up</button>
                        <div class="spinner-border text-warning" role="status"></div>
                        <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>Already have an account? <Link to="/auth/login"><b>Sign in </b></Link></p>
                        <p className='signup-confirmation' id="signup-confirmation">An  email verification has been sent to {formData.email}</p>
                    </form>
                    <br />
                    <p>You agree to iSend’s <span style={{ color: "#F2C040", lineHeight: "1.2" }}><Link to="/terms-of-use">Terms of Use </Link> & <Link to="/privacy-policy">Privacy Policy</Link></span>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                </div>
            </section>
        </>
    )
}

export default SignUp