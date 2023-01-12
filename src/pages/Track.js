import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Track = () => {
    return (
        <>
            <Navbar />
            <div className="order-container container">
                <br /> <br />
                <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>Track your Package</h1>
                <br />
                <input
                    type="text"
                    name="track-order"
                    placeholder="Enter your Tracking ID"
                    style={{ padding: "10px 0px 10px 20px", width: "50%", border: "none" }}
                />
                <button style={{ height: "30px", border: "none", height: "44px", backgroundColor: "#1B1B1B", color: "#fff", borderRadius: "0px 6px 6px 0px", padding: "0 20px" }}>Search</button>
                <br /> <br />
                <p style={{ color: "#F35A5A", fontStyle: "italic", paddingBottom: "8%" }}>* This tracking id does not exist</p>
            </div>
            <Footer />
        </>
    )
}

export default Track