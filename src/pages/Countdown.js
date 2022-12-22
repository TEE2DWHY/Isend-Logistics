import { useState } from "react"
// import axios from "axios"


const Countdown = () => {
    const [email, setEmail] = useState("")

    const handleChange = (e) => {
        setEmail(() => {
            return (
                e.target.value
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        document.getElementById("user-success").style.display = "block"
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
                                />
                                <button className="notify-button">Notify me</button>
                                <p id="user-success" className="user-success">You will be notified when we launch!</p>
                            </form>
                            <div className="footer-countdown" style={{ color: "grey", fontSize: "30px" }}>
                                <span><i class="fa-brands fa-whatsapp"></i> <i class="fa-brands fa-instagram" style={{ marginLeft: "30px" }}></i> <i class="fa-brands fa-twitter" style={{ marginLeft: "30px" }}></i></span>
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