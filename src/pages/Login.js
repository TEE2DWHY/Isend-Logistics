import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

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
        try{
            const res = await axios.post("https://isend-api-v1.herokuapp.com/api/v1/users/login", formData)
            console.log(res, `localStorage set with token value:${res.data.token}`);
            if (res.status === 200){
                window.location = "/pick-up"
                localStorage.setItem("token", res.data.token)
            }
        }
        catch{
          document.getElementById("login-err").style.display = "block"
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
                    <Link to="/"><img className="logo" src="/images/logo.png" alt="logo" /></Link>
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
                            onChange={handleChange}
                            onClick= {loginError}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px", fontWeight: "bold" }}>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={handleChange}
                            onClick= {loginError}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <br />
                        <Link to="/forgot-password"><p style={{ textAlign: "center" }}>Forgot password?</p></Link>
                        <br />
                        <p className="login-err" id="login-err">User Authorization Failed. Pls ensure user details are correct🙄.</p>
                        <button className="login-btn">Login</button>
                        <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>Don’t have an account? <b><Link to="/auth/sign-up">Sign up</Link> </b></p>
                    </form>
                    <br />
                    <p>Powered by <img src="/images/logo.png" alt="logo" style={{width:"50px", height:"14.82px", marginLeft:"3px"}}/></p>
                    <p>You agree to iSend’s <Link to="/privacy-policy"><span style={{ color: "#F2C040", lineHeight: "1.2" }}>Terms of Use & Privacy Policy</span></Link>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
                </div>
            </section>

        </>
    )
}

export default Login