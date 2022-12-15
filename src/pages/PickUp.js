import { useState } from "react"
const PickUp = () => {
    const [formData, setFormData] = useState({
        fullName: "", address: "", phoneNumber: "", category: ""
    })

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <>
            <section id="pickup">
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <span className="col-lg-6 phase-1">
                                <img className="logo" src="images/logo.png" alt="" />
                                <section id="login-form">
                                    <div className="header-login">
                                        <h1>Welcome back Victor!</h1>
                                        <form onSubmit={handleSubmit}>
                                            <p style={{ opacity: "0.6", fontSize: "14px", letterSpacing: "0.1em" }}>Please enter your details</p>
                                            <p style={{ fontSize: "14px" }}>Senders Name</p>
                                            <input
                                                className="login-input"
                                                type="text"
                                                required
                                                placeholder="Enter full name"
                                                name="fullName"
                                                onChange={handleChange}
                                            />
                                            <br />
                                            <p style={{ fontSize: "14px", marginTop: "10px" }}>Senders address</p>
                                            <input
                                                className="login-input"
                                                type="text"
                                                required
                                                placeholder="Enter address"
                                                name="address"
                                                onChange={handleChange}
                                            />
                                            <br />
                                            <p style={{ fontSize: "14px", marginTop: "10px" }}>Senders phoneNumber</p>
                                            <input
                                                className="login-input"
                                                type="text"
                                                required
                                                placeholder="+234"
                                                name="phoneNumber"
                                                onChange={handleChange}
                                            />
                                            <br />
                                            <p style={{ fontSize: "14px", marginTop: "10px" }}>Category</p>
                                            <select
                                                className="login-input"
                                                name="category"
                                                onChange={handleChange}
                                            >
                                                <option disabled selected>select category</option>
                                                <option>Food</option>
                                                <option>Cloth</option>
                                                <option>Product</option>
                                                <option>Electronics</option>
                                                <option>Shoes</option>
                                                <option>Documents</option>
                                                <option>Health</option>
                                            </select>
                                            <br />
                                            <p style={{ color: "#FFCD4D", fontSize: "12px", marginTop: "2px" }}>Forgot Password?</p>
                                            <button className="login">Save</button>
                                        </form>
                                    </div>
                                </section>
                            </span>
                            <span className="col-lg-6 phase-2">

                            </span>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default PickUp