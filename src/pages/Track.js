import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Track = () => {
    const [id, setId] = useState("")

    const handleId = (e) => {
        setId(
            e.target.value
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id)
        window.location = "/order-overview"
    }

    return (
        <>
            <Navbar />
            <div className="order-container container">
                <br /> <br />
                <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>Track your Package</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="id"
                        onChange={handleId}
                        required
                        placeholder="Enter your Tracking ID"
                        style={{ padding: "10px 0px 10px 20px", width: "50%", border: "none" }}
                    />
                    <button style={{ border: "none", height: "44px", backgroundColor: "#1B1B1B", color: "#fff", borderRadius: "0px 6px 6px 0px", padding: "0 20px" }}>Search</button>
                </form>
                <br /> <br />
                <p style={{ color: "#F35A5A", fontStyle: "italic", paddingBottom: "8%" }}>* This tracking id does not exist</p>
            </div>
            <Footer />
        </>
    )
}

export default Track