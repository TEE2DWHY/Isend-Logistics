import { useState } from "react"
import axios from "axios"


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
        try {
            const res = await axios.post("https://isend-dev.onrender.com/api/v1/waitingList", formData)
            console.log(res)
            if (res.status === 200) {
                document.getElementById("user-success").style.display = "block"
            }
        }
        catch (err) {
            document.getElementById("user-failure").style.display = "block"
            console.log(err)
        }
    }

    return (
        <>
            <section id="countdown">
                <div className="container">
                    <div className="nav">
                        <img className="logo2" src="images/logo-2.png" alt="" />
                    </div>

                    <div className="row">
                        <div className="col-lg-6 notifications">
                            <h1 className="countdown-header"><div className="get-notified">Get Notified</div>
                                When we Launch.</h1>
                            <p className="countdown-p1">Our website launches soon. In the meantime, <br />stay with us.</p>
                            <form className="form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="countdown-input"
                                    placeholder="Enter your email address"
                                    onChange={handleChange}
                                    required
                                    name="email"
                                />
                                <button className="notify-button">Notify me</button>
                                <p id="user-success" className="user-success">You will be notified when we launch!</p>
                                <p id="user-failure" className="user-failure">Error..Something is wrong!😐</p>
                            </form>
                            <div className="footer-countdown" style={{ color: "grey", fontSize: "30px" }}>
                                <span><i className="fa-brands fa-whatsapp"></i> <i className="fa-brands fa-instagram" style={{ marginLeft: "30px" }}></i> <i className="fa-brands fa-twitter" style={{ marginLeft: "30px" }}></i></span>
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