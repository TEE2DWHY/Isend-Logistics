import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#"><img className="logo" src="images/logo.png" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <div className="nav-center">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/#" style={{ marginRight: "30px" }}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-center" to="/track-order" style={{ marginRight: "30px" }}>Track your package</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/our-centers" className="nav-link" style={{ marginRight: "20px" }}><b>Our centers</b></Link>
                                    </li>
                                </div>
                                <li className="nav-item">
                                    <Link to="/login"> <span className="nav-link nav-cta"><button className='sign-in'>Sign in</button></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sign-up" className="nav-link nav-cta"><button className="create-account">Create Account</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Navbar