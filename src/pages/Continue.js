import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Continue = () => {
  return (
    <>
           <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src="images/logo.png" alt="logo" /></Link>
                </div>
                <div style={{textAlign:"center", marginTop:"5%"}}>
                    <h3 style={{fontWeight:"bold", marginBottom:"2%"}}>Welcome to Isend</h3>
                    <p style={{letterSpacing:"0.1rem"}}>Your iSend account is set up and you can start shipping at any time.
                    <br/>
                        Your user ID is: jessicachike@gmail.com</p>
                <br/>
                        <Link to="/pick-up"><button className="join-us-button"><b>SHIP NOW</b></button></Link>
                </div>
                </section>
                <br/> <br/>
                <Footer/>
    </>
  )
}

export default Continue