import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png"
const Continue = () => {

    const user = sessionStorage.getItem("user");
    const loggedIn = sessionStorage.getItem("loggedIn");
    const userEmail = sessionStorage.getItem("email");
  return (
    <>
           <section style={{marginBottom:"15%"}}>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                </div>
                <div style={{textAlign:"center", marginTop:"5%"}}>
                    <h3 style={{fontWeight:"bold", marginBottom:"2%"}}>{loggedIn ? `Welcome Back ${user}` : "Welcome to Isend"}</h3>
                    <p style={{letterSpacing:"0.1rem"}}>{loggedIn ? "Your iSend account is set up and you can start shipping at any time." : ""}
                    
                       <span style={{marginTop:"3%", display:"block"}}>{loggedIn ? ` Your user ID is: ${userEmail}` : "It is required that your are logged in to be able to use our services."}</span></p>
                <br/>
                        <Link to="/pick-up"><button className="join-us-button"><b>{loggedIn ? "SHIP NOW" : "LOGIN"}</b></button></Link>
                </div>
                </section>
                <Footer/>
    </>
  )
}

export default Continue