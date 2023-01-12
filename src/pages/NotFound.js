// import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const NotFound = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <h1 className="lost-text">404</h1>
            <img className="lost-img img-fluid" src="images/Treasure hunt-pana 1.png" alt="lost-img" />
            <p style={{ padding: "20px", textAlign: "center" }}>Sorry, it looks like the page you are trying to access is not available.
                <br />
                This could be due to a number of reasons, such as a broken link, an outdated bookmark, or a mistyped URL.</p>
            <Footer />
        </>
    )
}

export default NotFound