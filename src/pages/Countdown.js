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

                    <h3 className="launch">We are Launching soon! <div className="launch-img" src="images/launch.gif" alt="" /></h3>
                    <br />
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="countdown-header"><div className="get-notified">Get Notified</div>
                                When we Launch.</h1>
                            <p className="countdown-p1">Our website launches soon. In the meantime, <br />stay with us.</p>
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
                                <button className="notify-button">Notify me</button>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="countdown-rec"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popover */}
            <div class="modal" tabindex="1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">Welcome to Isend! <img className="launch-img" src="images/launch.gif" alt="" /></h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3>We are Launching soon</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
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