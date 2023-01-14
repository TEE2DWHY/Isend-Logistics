import { Link } from "react-router-dom"

const Experience = () => {
    return (
        <section>
            <br />
            <div className="container">
                <Link to="/"><img className="logo" src="images/logo.png" alt="logo" /></Link>
                <div className="experience" style={{ textAlign: "center", marginTop: "10%" }}>
                    <h5 style={{ fontWeight: "bold" }}>Rate your experience</h5>
                    <span><i class="fa-regular fa-star" style={{ color: "#D9D9D9" }}></i><i class="fa-regular fa-star" style={{ color: "#D9D9D9" }}></i><i class="fa-regular fa-star" style={{ color: "#D9D9D9" }}></i><i class="fa-regular fa-star" style={{ color: "#D9D9D9" }}></i><i class="fa-regular fa-star" style={{ color: "#D9D9D9" }}></i></span>
                    <br /> <br />
                    <form>
                        <input
                            className="login-input"
                            type="text"
                            required
                            placeholder="Leave a comment"
                            name="phoneNumber"
                            style={{ width: "30%", backgroundColor: "#FDFCF7;" }}
                        // onChange={handleChange}
                        />
                        <br /> <br />
                        <button className="login-btn" style={{ width: "30%" }}>Done</button>
                    </form>
                </div>
            </div>
        </section>
        // <section>
        //     <div className="container-fluid">
        //         <div className="row">
        //             <span className="col-lg-6 phase-1">
        //                 <br />
        //                 <img className="logo" src="images/logo.png" alt="" />
        //                 <section id="login-form">
        //                     <i className="fa-solid fa-arrow-left  container" style={{ marginTop: "10%", marginLeft: "60px", fontSize: "22px" }}></i>
        //                     <div className="header-login">
        //                         <div className="experience-rating">
        //                             <h2>Rate your experience</h2>
        //                             <span><i class="fa-solid fa-star yellow-star"></i><i class="fa-solid fa-star yellow-star"></i><i class="fa-solid fa-star yellow-star"></i><i class="fa-solid fa-star yellow-star"></i><i class="fa-regular fa-star" style={{ color: "#D9D9D9" }}></i></span>
        //                         </div>
        //                         <br />
        //                         <p style={{ fontSize: "14px", marginTop: "10px" }}><i class="fa-solid fa-money-check-dollar" style={{ fontSize: "12px" }}></i> Cash</p>
        //                         <input
        //                             className="login-input"
        //                             type="text"
        //                             required
        //                             placeholder="Leave a comment"
        //                             name="phoneNumber"
        //                         // onChange={handleChange}
        //                         />
        //                         <br />
        //                         <button className="login">Done</button>
        //                     </div>
        //                 </section>
        //             </span>
        //             <div className="col-lg-6 phase-2">
        //                 <div className="phase-2-contents">
        //                     <p>Powered by <i style={{ fontSize: "12px", marginLeft: "10px", color: "#7065F0" }} class="fa-solid fa-bookmark"></i>
        //                         <br /> <br />
        //                         You agree to Porchplus’s Terms of Use & Privacy Policy. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply. </p></div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Experience