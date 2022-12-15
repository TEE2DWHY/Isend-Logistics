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
                        <img className="logo2" class src="images/logo-2.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="countdown-header">We are cooking something for you</h1>
                            <br />
                            <p>Our website launches soon. In the meantime, stay with a panda.</p>
                            <div className="row">
                                <div className="col-lg-5">
                                    <h3>12 : 10 : 46 : 13</h3>
                                </div>
                                <div className="col-lg-7">
                                    <p>12 days left</p>
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
            <section id="footer">

            </section>
        </>
    )
}

export default Countdown