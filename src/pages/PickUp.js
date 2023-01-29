// import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
const PickUp = () => {
    const [data, setData] = useState({
        hub_location:"Ikeja", senders_phonenumber: "", senders_address: "",
    })

    const handleChange = (e) => {
        setData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    return (
        <>
            <section>
                <br />
                <div className="container">
                    <Link to="/"><img className="logo" src="images/logo.png" alt="logo" /></Link>
                </div>
                <br /> <br /> <br />
                <div className="pickup-container">
                    <h3 style={{ fontWeight: "bold", textAlign: "center" }}>Pickup Details</h3>
                    <br />
                    <form>
                    <label style={{ display: "block", marginTop: "20px" }}>Hub Location</label>
                    <br/>
                        <select
                             style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        name="hub_location"
                        required
                        onChange={handleChange}
                        >
                        <option disabled selected>Ikeja</option>
                        <option>Ikorodu</option>
                        </select>
                        <br />
                        <label style={{ display: "block", marginTop: "20px" }}>Sender's address</label>
                        <br />
                        <input
                            type="text"
                            name="senders_address"
                            required
                            onChange={handleChange}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Sender's PhoneNumber</label>
                        <br />
                        <input
                            type="text"
                            name="senders_phonenumber"
                            placeholder="+234"
                            onChange={handleChange }
                            required
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        /> 
                        <br /> <br />
                        <Link
                         to="/delivery-details"
                         state= {{data: data}}><button className="login-btn">Next</button></Link>
                    </form>
                </div>
            </section>

        </>
    )
}

export default PickUp