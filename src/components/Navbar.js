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
                                        <a className="nav-link home" href="/#"><b>Home</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/track-order" className="nav-link package"><b>Track your Package</b></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/our-centers" className="nav-link centers" style={{letterSpacing:"0.02em"}}><b>Company</b></Link>
                                    </li>
                                </div>
                                <li className="nav-item">
                                    <Link to="/auth/login"> <span className="nav-link nav-cta"><button className='sign-in'>Sign in</button></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/auth/sign-up" className="nav-link nav-cta"><button className="create-account">Create Account</button></Link>
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