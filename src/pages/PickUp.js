import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
const PickUp = () => {
    const [formData, setFormData] = useState({
        hub_location:"Ikeja", sendersAddress: "", sendersphoneNumber: "",
    })

    // GENERIC METHOD FOR SENDING JWT TOKEN
    // axios.interceptors.request.use(
    //     config =>{
    //         config.headers.authorization = `Bearer ${localStorage.token}`; 
    //         return config;
    //     },
    //     error =>{
    //         return Promise.reject(error);
    //     }
    // )
    // const token = localStorage.getItem("token");

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
                headers:{Authorization: `Bearer ${localStorage.token}`}
            });
            console.log(res);
            if (res.status === 201){
                window.location = "/delivery-details"
            }
        }
        catch(err){
            console.log(err)
        }
        console.log(formData)
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
                        name="hub_location"
                        required
                        onChange={handleChange}
                        >
                        <option disabled selected>Ikeja</option>
                        </select>
                        <br />
                        <label style={{ display: "block", marginTop: "20px" }}>Sender's address</label>
                        <br />
                        <input
                            type="text"
                            name="sendersAddress"
                            required
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
                            required
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