import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
   <>
         <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src="images/logo.png" alt="logo" /></Link>
                </div>
                <br /> <br />
                <div className="fp-container">
                    <Link to="/"><p><i class="fa-solid fa-arrow-left" style={{ fontSize: "14px", marginRight: "10px" }}></i> Home</p></Link>
                    <br /> <br /> <br />
                    <h3 style={{ fontWeight: "bold" }}>Forgot Password?</h3>
                    <p style={{ color: "#9EA3AE" }}>Insert your email address</p>
                    <br />
                    <form>
                        <label style={{ display: "block", fontWeight: "bold" }}>Email</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            // onChange={handleChange}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <br />
                        <button className="login-btn">Login</button>
                        <p className='password-confirmation'>An  email will be sent to  arinzechi@gmail.com if the account exist</p>
                   </form>
              </div>
                </section>
   </>
  )
}

export default ForgotPassword