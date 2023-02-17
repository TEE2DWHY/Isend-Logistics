// import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import UserNavbar from "../components/UserNavbar"
// import PlacesAutocomplete,{
//     geocodeByAddress,
//     getLatLng
//   } from 'react-places-autocomplete';

const PickUp = () => {
    const [data, setData] = useState({
        hub_location:"Ikeja", senders_phonenumber: "", senders_address: "",
    })

    // const [address, setAddress] = useState("");

    // const handleSelect = async value =>{};
    const handleChange = (e) => {
        setData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const name = localStorage.getItem("user")
    
    return (
        <>
       <section>
                <br />
              <UserNavbar/>
                <br /> <br /> <br />
                <h4 style={{textAlign:"center"}}>Fill your Orders <span className="username" style={{color:"#F2C040"}}>{name}! <i class="fa-solid fa-truck-fast"></i></span> </h4>
                <br/>
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
                        <option disabled selected>Hub</option>
                        <option>Ikeja</option>
                        <option>Ikorodu</option>
                        </select>
                        <br />
                        <label style={{ display: "block", marginTop: "20px" }}>Sender's address</label>
                        <br />
                        <input
                            type="text"
                            name="senders_address"
                            placeholder=""
                            onChange={handleChange }
                            required
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                           />
                           <br/>
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