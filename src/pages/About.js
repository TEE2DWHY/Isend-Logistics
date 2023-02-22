import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import rectangle from "../assets/images/Rectangle 6285.png"


const About = () => {
  return (
    <>
        <Navbar/>
        <section>
            <div className="about">
            <h4 className="container">About us </h4>
            </div>
            <br/>  <br/>
             {/* About Us Content*/}
             <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <p>We are a leading provider of cross-border money transfer services, helping people around the world send money to their loved ones in over 100 countries.
                    Founded in 2015, we have quickly established ourselves as a trusted and reliable partner for those looking to send money abroad. Our mission is to make it easy for people to send money to their loved ones, no matter where they are in the world.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="about-us-img img-fluid" src={rectangle} alt="about-us"/>
                        </div>
                </div>
                <br/> <br/>
                <p>Our platform is designed to be user-friendly and easy to navigate, allowing customers to quickly and securely send money to their loved ones. We pride ourselves on our competitive exchange rates, fast and reliable service, and commitment to providing the best customer experience possible.
                   Our team is made up of dedicated professionals from around the world, who are passionate about making it easy for people to send money to their loved ones. We are constantly innovating and looking for new ways to improve our service, and we are committed to providing our customers with the best possible experience.
                   Thank you for choosing iSend. We look forward to serving you and helping you stay connected with your loved ones around the world.</p>
             
                   <br/>
                 <div className="about-join">
                       <span style={{fontSize:"20px"}}> <u>Join The </u> Team</span> 
                </div>
                <br/>
                <p>making it easy for people to send money to their loved ones. We are constantly innovating and looking for new ways to improve our service, and we are committed to providing our customers with the best possible experience. Thank you for choosing iSend. We look forward to serving you and helping you stay connected with your loved ones around the world.</p>
                <div style={{textAlign:"center"}}>
                <br/>
                <button className="join-us-button"><b>Join Us</b></button>
                </div>
             </div>
             </section>

        <br/> <br/>
        <Footer/>
    </>
  )
}

export default About