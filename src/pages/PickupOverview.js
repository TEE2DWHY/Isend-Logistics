import axios from "axios"
import { useState } from "react"
// import { Link } from "react-router-dom"
import UserNavbar from "../components/UserNavbar"
// import DeliveryDetails from "./DeliveryDetails"

const PickupOverview = () => {
const [formData, setFormData] = useState({
    delivery_personnel: "", sendersAddress:"", category:"Electronics", sendersphoneNumber:"", receivers_name:"",receivers_address:"", receivers_phoneNumber:""
})


const handleChange = (e) =>{
    setFormData((prevFormData)=>{
        return{
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
}
const handleSubmit = async (e) =>{
    e.preventDefault();
try{
    const res = await axios.get("https://isend-api-v1.herokuapp.com/api/v1/dispatch/",{
        headers:{Authorization: `Bearer ${localStorage.token}`}
    });
    console.log(res)
    if (res.status === 200){
        // window.location = "/order-overview"
    }
}
catch(err){
console.log(err)
}
}
console.log(formData)

const copyPaymentId = () =>{
    var paymentId = document.getElementById("payment-id").innerHTML
    navigator.clipboard.writeText(paymentId)
    alert(paymentId + " copied successfully.");
}
 
    return (
        <>
            <section>
                <br />
              <UserNavbar/>
                <br />
                <div className="container-fluid" style={{ backgroundColor: "#FFC24D" }}>
                    <div className="container">
                        <h2 style={{ fontWeight: "bold", fontSize: "25px", padding: "10px 0" }}>Delivery Overview</h2>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 style={{fontWeight:"bold", justifyContent:"space-between", display:"flex", alignItems:"center"}}>Pickup Details <i class="fa-solid fa-pen-to-square" style={{fontSize:"20px", marginRight:"20px"}}></i></h4>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <label style={{ display: "block" }}>Sender's name</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Wade Warren"
                                    name="delivery_personnel"
                                    onChange={handleChange}
                                    className= "pickup-input"
                                    value="love"
                                />
                                <label style={{ display: "block", marginTop: "20px" }}>Sender's address</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
                                    name="sendersAddress"
                                    onChange={handleChange}
                                    className= "pickup-input"
                                     />
                                <label style={{ display: "block", marginTop: "20px" }}>Sender's Phone Number</label>
                                <br />
                                <input
                                    type="text"
                                    name="sendersphoneNumber"
                                    onChange={handleChange}
                                    placeholder='+234 810-019-4732'
                                    className= "pickup-input"
                                     />
                                <label style={{ display: "block", marginTop: "20px" }}>Category</label>
                                <br />
                                <select
                               className= "pickup-input"
                               name="category"
                                onChange={handleChange}
                                style={{marginBottom:"30px"}}
                                >
                                    <option>Electronics</option>
                                    <option>Health</option>
                                    <option>Shoe</option>
                                    <option>Furniture</option>
                                    <option>Good</option>
                                    <option>Products</option>
                                </select>
                                <br />
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <h4 style={{fontWeight:"bold", justifyContent:"space-between", display:"flex", alignItems:"center"}}>Delivery Details <i class="fa-solid fa-pen-to-square" style={{fontSize:"20px"}}></i></h4>
                            <br />
                            <form>
                                <label style={{ display: "block" }}>Receiver's name</label>
                                <br />
                                <input
                                    type="text"
                                    name="receivers_name"
                                    onChange={handleChange}

                                    className= "pickup-input"
                                     />
                                <label style={{ display: "block", marginTop: "20px" }}>Receiver's address</label>
                                <br />
                                <input
                                    type="text"
                                    name="receivers_address"
                                    onChange={handleChange}
                                    className= "pickup-input"
                                    />
                                <label style={{ display: "block", marginTop: "20px" }}>Receiver's Phone Number</label>
                                <br />
                                <input
                                    type="text"
                                    name="receivers_phoneNumber"
                                    onChange={handleChange}
                                    placeholder='+234 810-019-4732'
                                    className= "pickup-input"
                                    />
                                {/* <input
                                    type="text"
                                    name="receiversDetails"
                                    placeholder="Add New Receiver Details"
                                    style={{ display: "block", width: "70%", borderRadius: "6px", padding: "10px 20px", border: "2px solid #EBE9E5" }}
                                />
                                <br /> */}
                                <br/> <br/>
                                <label style={{ display: "block", marginTop: "20px" }}>Payment Method</label>
                                <br/>
                                <div>
                                    <h6><i class="fa-solid fa-money-check-dollar" style={{fontSize:"16px"}}></i> Cash</h6>
                                    <hr/>
                                </div>
                                <div>
                                    <h6><i class="fa-solid fa-building-columns" style={{fontSize:"16px"}}></i> Bank Transfer</h6>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br /> <br />
                    <h5>Payment Details</h5>
                    <hr />
                    <div className="row" style={{ marginBottom: "10%" }}>
                        <div className="col-lg-6">
                            <p style={{ className: "14px" }}>
                                If you’re not available when the courier arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered.
                                <br /> <br />
                                <span style={{ color: "#EA2525" }}>Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the shop if you are not available.</span>
                            </p>
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "10px" }}>
                            <div className="d1">
                                <p>Subtotal</p>
                                <p>N 2,500.00</p>
                            </div>
                            <div className="d1">
                                <p>Taxes & Other Fees <i class="fa-solid fa-circle-info" style={{ fontSize: "16px" }}></i></p>
                                <p>N 200.00</p>
                            </div>
                            <div className="d1">
                                <p>Service Fee <i class="fa-solid fa-circle-info" style={{ fontSize: "16px" }}></i></p>
                                <p>N 300.00</p>
                            </div>
                            <hr />
                            <div className="d1" style={{ fontWeight: "bold" }}>
                                <p>Total</p>
                                <p>N3,000.00</p>
                            </div>
                            <br />
                            <button className="login-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Make Payment</button>
                            {/* Modal  */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title" id="exampleModalLabel">Make payment in the next : 05:00:00mins</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <p>Kindly make payment to  the account below</p>
                                    <p className="payment-note">Ensure you add the below code to your bank narration.</p>
                                    <p style={{fontSize:"12px", fontWeight:"bold", display:"inline"}} id="payment-id">SEND12467</p> <span><i class="fa-regular fa-copy" style={{fontSize:"15px", cursor:"pointer"}} onClick={copyPaymentId}></i></span>
                                    </div>
                                    <div class="modal-footer" style={{display:"flex", justifyContent:"space-between"}}>
                                        <button type="button" className="having-issues" data-bs-dismiss="modal">Having issues</button>
                                        <button type="button" className="made-payment">I have made payment</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            {/* <Link to="/order-overview"><button className="login-btn" >Make Payment</button></Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PickupOverview