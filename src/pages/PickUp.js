import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
const PickUp = () => {
    const [formData, setFormData] = useState({
        delivery_personnel: "", sendersAddress: "", sendersphoneNumber: "", category: ""
    })

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("https://isend-api-v1.herokuapp.com/api/v1/dispatch/", formData,{
                headers :{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '
                }
            });
            console.log(res);
            if (res.status === 200){
                window.location = "/delivery-details"
            }
        }
        catch(err){
            console.log(err)
        }
        // console.log(formData)
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
                    <label style={{ display: "block", marginTop: "20px" }}>Hub Location</label>
                    <br/>
                        <select
                             style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        >
                        <option disabled selected>Select Hub</option>
                        <option>Ikoyi</option>
                        </select>
                        <br />
                        <label style={{ display: "block", marginTop: "20px" }}>Sender's address</label>
                        <br />
                        <input
                            type="text"
                            name="sendersAddress"
                            onChange={handleChange}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Sender's PhoneNumber</label>
                        <br />
                        <input
                            type="text"
                            name="sendersphoneNumber"
                            placeholder="+234"
                            onChange={handleChange }
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        /> 
                        <br /> <br />
                        <button className="login-btn">Next</button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default PickUp