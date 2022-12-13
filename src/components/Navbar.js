import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/#"><img className="logo" src="images/logo.png" alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">Get an estimate</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#"><b>Our centers</b></a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/sign-up" class="nav-link">Create Account</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/login"> <span class="nav-link"><button className='sign-in'>Sign in</button></span></Link>
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