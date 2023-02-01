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
                <h1 style={{ fontSize: "25px", fontWeight: "bold", letterSpacing: "0.05em" }}>Track your Package</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="id"
                        onChange={handleId}
                        required
                        placeholder="Enter your Tracking ID"
                        className="id-input"
                    />
                    <button className="search-id">Search</button>
                </form>
                <br /> <br />
                <p style={{ color: "#F35A5A", fontStyle: "italic", paddingBottom: "8%" }}>* This tracking id does not exist</p>
            </div>
            <Footer />
        </>
    )
}

export default Track