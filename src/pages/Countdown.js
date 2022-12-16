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
                    <h3 className="launch">We are Launching soon! <img className="launch-img" src="images/launch.gif" alt="" /></h3>
                    <br />
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="countdown-header">Get Notified <br />
                                When we Launch</h1>
                            <br />
                            <p className="countdown-p1">Our website launches soon. In the meantime, stay with us.</p>
                            <br />
                            <div className="row">
                                <div className="col-lg-5">
                                    <p style={{ fontSize: "12px" }}>DAYS |  HOURS  | MINUTES |  SECONDS</p>
                                    <h3 style={{ fontWeight: "bold" }}>12 : 10 : 46 : 13</h3>
                                </div>
                                <div className="col-lg-7">
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
                                <button className="notify-button">Notify Me</button>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid countdown-rec" src="images/countdown-img.png" alt="" />
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