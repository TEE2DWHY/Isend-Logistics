import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Experience = () => {
    return (
        <section>
            <br />
            <div className="container">
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
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
       
    )
}

export default Experience