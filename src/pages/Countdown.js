import { useState } from "react"
import axios from "axios"
import logo from "../assets/images/logo.png"



const Countdown = () => {
    const [formData, setEmail] = useState({
        email: ""
    })

    const handleChange = (e) => {
        setEmail((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    // console.log(email)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = document.getElementById("email")
        document.getElementById("notify-text").style.display = "none"
        document.getElementById("spinner").style.display = "block"
        try {
            const res = await axios.post("https://isend-dev.onrender.com/api/v1/waitingList", formData)
            console.log(res)
            if (res.status === 200) {
                document.getElementById("user-success").style.display = "block"
                document.getElementById("notify").innerHTML = "Subscribed"
                input.value = " "
            }
        }
        catch (err) {
            document.getElementById("user-failure").style.display = "block"
            console.log(err)
            document.getElementById("notify").innerHTML = "Subscribed"
            input.value = " "
        }
    }


    return (
        <>
            <section id="countdown">
                <div className="container">
                    <div className="nav">
                        <img className="logo2" src={logo} alt="logo" />
                    </div>

                    <div className="row">
                        <div className="col-lg-6 notifications">
                            <h1 className="countdown-header"><div className="get-notified">Get Notified</div>
                                When we Launch.</h1>
                            <p className="countdown-p1">Our website launches soon. In the meantime, <br />stay with us.</p>
                            <form className="form" onSubmit={handleSubmit}>
                                <div style={{ height: "50px", marginBottom: "20px" }}>
                                    <input
                                        type="email"
                                        className="countdown-input"
                                        placeholder="Enter your email address"
                                        onChange={handleChange}
                                        required
                                        id="email"
                                        name="email"
                                    />
                                    <button className="notify-button" id="notify"><span id="notify-text">Notify me</span>  <i style={{ fontSize: "19px", paddingLeft: "10px" }} class="fas fa-spinner fa-spin" id="spinner"></i></button>
                                </div>
                                <p id="user-success" className="user-success">You will be notified when we launch!</p>
                                <p id="user-failure" className="user-failure">Error..Something is wrong!😐</p>
                            </form>
                            <div className="footer-countdown" style={{ color: "grey" }}>
                                <span><a href="https://wa.me/message/4P4TWM3MHOEDF1"><i className="fa-brands fa-whatsapp"></i></a> <a href="https://instagram.com/isendhq?igshid=YmMyMTA2M2Y="><i className="fa-brands fa-instagram" style={{ marginLeft: "30px" }}></i> </a> <a href=" https://twitter.com/isendhq"><i className="fa-brands fa-twitter" style={{ marginLeft: "30px" }}></i></a></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="isend-launch img-fluid" src="images/isend-launch.gif" alt="isend-launch" />
                            <div className="countdown-rec">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------------------------------------------------------------------- */}
        </>
    )
}

export default Countdown