// import { useState } from "react"
import { Link } from "react-router-dom"
const PickUp = () => {
    // const [formData, setFormData] = useState({
    //     fullName: "", address: "", phoneNumber: "", category: ""
    // })

    // const handleChange = (e) => {
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)
        window.location = "/delivery-details"
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
                    <form onSubmit={handleSubmit}>
                        <label style={{ display: "block" }}>Sender's name</label>
                        <br />
                        <input
                            type="text"
                            name="sendersName"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Sender's address</label>
                        <br />
                        <input
                            type="text"
                            name="sendersAddress"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Phone Number</label>
                        <br />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="+234"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Category</label>
                        <br />
                        <select style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}>
                            <option disabled selected>Select Category</option>
                            <option>Electronics</option>
                            <option>Documents</option>
                            <option>Clothings</option>
                            <option>Food</option>
                            <option>Health</option>
                            <option>Shoes</option>
                        </select>
                        <br /> <br /> <br />
                        <button className="login-btn">Next</button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default PickUp