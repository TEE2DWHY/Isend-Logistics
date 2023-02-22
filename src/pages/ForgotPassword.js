import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from "../assets/images/logo.png"


const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const handleChange = (e) =>{
    setEmail (() =>{
      return(
        e.target.name = e.target.value
      )
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("https://isend-api-v1.herokuapp.com/api/v1/users/forgot-password", email);
      console.log(res)
        if (res.status === 200){
         document.getElementById("password-confirmation").style.display = "inline"
        }
    }
    catch(err){
        document.getElementById("no-account").style.display = "block"
        console.log(err)
    }
    // console.log(email)
  }
  const change = () =>{
    document.getElementById("no-account").style.display = "none"
  }
  return (
   <>
         <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                </div>
                <br /> <br />
                <div className="fp-container">
                    <Link to="/"><p><i class="fa-solid fa-arrow-left" style={{ fontSize: "14px", marginRight: "10px" }}></i> Home</p></Link>
                    <br /> <br /> <br />
                    <h3 style={{ fontWeight: "bold" }}>Forgot Password?</h3>
                    <p style={{ color: "#9EA3AE" }}>Insert your email address</p>
                    <br />
                    <form on onSubmit={handleSubmit}>
                        <label style={{ display: "block", fontWeight: "bold" }}>Email</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            required
                            id='email'
                            onClick={change}
                            onChange={handleChange}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <br />
                        <p id='no-account'>"{email}" does not have an account with us.</p>
                        <button className="login-btn">Login</button>
                        <p className='password-confirmation' id='password-confirmation'>An email will be sent to {email}</p>
                   </form>
              </div>
                </section>
   </>
  )
}

export default ForgotPassword