

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
        </>
    )
}

export default Countdown