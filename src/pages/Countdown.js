

const Countdown = () => {
    return (
        <>
            <section id="countdown">
                <div className="container">
                    <div className="nav">
                        <img className="logo2" class src="images/logo-2.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="countdown-header">We are cooking something for you</h1>
                            <br />
                            <p>Our website launches soon. In the meantime, stay with a panda.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3>12 : 10 : 46 : 13</h3>
                                </div>
                                <div className="col-lg-6">
                                    <p>12 days left</p>
                                </div>
                            </div>
                            <br /> <br />
                            <form>
                                <input
                                    type="email"
                                    className="countdown-input"
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
            <section id="footer">

            </section>
        </>
    )
}

export default Countdown