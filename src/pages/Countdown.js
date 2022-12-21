import { useState } from "react"


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
    }

    return (
        <>
            <section id="countdown">
                <div className="container">
                    <div className="nav">
                        <img className="logo2" src="images/logo-2.png" alt="" />
                    </div>
                    <h2 className="launch">We are Launching soon! <img className="launch-img" src="images/launch.gif" alt="" /></h2>
                    <br />
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="countdown-header"><div className="get-notified">Get Notified</div>
                                When we Launch.</h1>
                            <p className="countdown-p1">Our website launches soon. In the meantime, <br />stay with us.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p style={{ fontSize: "12px", letterSpacing: "0.08rem" }}>DAYS |  HOURS  | MINUTES |  SECONDS</p>
                                    <h3 style={{ fontWeight: "bold", letterSpacing: "0.06rem" }}>12 : 10 : 46 : 13</h3>
                                </div>
                                <div className="col-lg-6">
                                    <p className="days">12 days left</p>
                                </div>
                            </div>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="countdown-input"
                                    onChange={handleChange}
                                />
                                <button className="notify-button">Notify me</button>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <img className="countdown-img" src="images/countdown-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------------------------------------------------------------------- */}
            <section id="footer-countdown">
                <div className="footer-countdown" style={{ textAlign: "center", color: "grey", fontSize: "30px" }}>
                    <span><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram" style={{ marginLeft: "30px" }}></i> <i class="fa-brands fa-twitter" style={{ marginLeft: "30px" }}></i></span>
                </div>
            </section>
        </>
    )
}

export default Countdown