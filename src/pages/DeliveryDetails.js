import { useState } from 'react'
import { useLocation} from 'react-router-dom'
import axios from 'axios'
import UserNavbar from '../components/UserNavbar'


const DeliveryDetails = (props) => {
    const location = useLocation();
    const data = location.state?.data;
    const [formData, setFormData] = useState({
         hub_location: data ? data.hub_location:"",senders_address: data ? data.senders_address:"", senders_phonenumber: data ? data.senders_phonenumber:"", receivers_name: "", recievers_address:"", receivers_phonenumber: "" , category: ""
    })
    const handleChange = (e) =>{
        setFormData((prevFormData)=>{
            return{
                ...prevFormData,
                [e.target.name] : e.target.value
            }
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (formData.hub_location === "" || formData.senders_address === ""|| formData.sendersphoneNumber === ""){
            alert("Details from pickup page aren't completed, head back to pickup page and update🙄.")
            window.location = "/pick-up"
        }
        try{
            const res = await axios.post("https://isend-api-v1.herokuapp.com/api/v1/dispatch/", formData, {
                headers:{Authorization:`Bearer ${localStorage.token}`}
            })
            console.log(res)
            if (res.status === 201){  
                window.location = "/pickup-overview"
            }
        }catch(err){
            console.log(err)
        }
          console.log(formData)
    }
    return (
        <>
            <section>
                <br />
               <UserNavbar/>
                <br /> <br /> <br />
                <div className="pickup-container">
                    <h3 style={{ fontWeight: "bold", textAlign: "center" }}>Delivery Details </h3>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label style={{ display: "block" }}>Receiver Name</label>
                        <br />
                        <input
                            type="text"
                            name="receivers_name"
                            onChange={handleChange}
                            required
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                         <label style={{ display: "block", marginTop: "20px" }}>Receiver's PhoneNumber</label>
                        <br />
                        <input
                            type="text"
                            name="receivers_phonenumber"
                            onChange={handleChange}
                            required
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                        <label style={{ display: "block", marginTop: "20px" }}>Receiver's address</label>
                        <br />
                        <input
                            type="text"
                            name="receivers_address"
                            onChange={handleChange}
                            required
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        />
                       {/* <label style={{ display: "block", marginTop: "20px" }}>Receiver's Phone Number</label>
                        <br />
                        <input
                            type="text"
                            name="receivers_phoneNumber"
                            placeholder='+234 810-019-4732'
                            onChange={handleChange}
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        /> */}
                           <label style={{ display: "block", marginTop: "20px" }}>Category</label>
                        <br />
                        <select 
                        name="category"
                        onChange={handleChange }
                        required
                        style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}>
                            <option disabled selected>Select Category</option>
                            <option>electronics</option>
                            <option>documents</option>
                            <option>food</option>
                            <option>health</option>
                            <option>shoes</option>
                        </select>
                        {/* <br /> <br/>
                        <input
                            type="text"
                            name="receiversDetails"
                            onChange={handleChange}
                            placeholder="Add New Receiver Details"
                            style={{ display: "block", width: "100%", borderRadius: "6px", border: "none", padding: "10px 20px" }}
                        /> */}
                        <br /> <br /> <br />
                        <button className="login-btn">Next</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default DeliveryDetails