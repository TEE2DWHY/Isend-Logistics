import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserNavbar = () => {
    const Logout = async (e) =>{
        e.preventDefault()
        try{
            const res = await axios.get("https://isend-api-v1.herokuapp.com/api/v1/users/logout",{
                headers:{Authorization:`Bearer ${localStorage.token}`}
            });
            console.log(res.data)
            localStorage.clear();
            window.location = "/"
        } 
        catch(err){
            if (err){
            console.log(err)
            }
        }
    }
  return (
    <>
    <div className="container">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#"><img className="logo" src="/images/logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <div className="nav-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/#"><b>Home</b></a>
                            </li>
                            <li className="nav-item">
                                <Link to="/track-order" className="nav-link package"><b>Track Package</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/our-centers" className="nav-link"><b>Our centers</b></Link>
                            </li>
                        </div>
                        <li className="nav-item">
                            <Link to="/auth/login"> <span className="nav-link nav-cta"><button className='sign-in'>Contact us</button></span></Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link nav-cta"><button className="create-account" onClick={Logout}>Logout</button></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</>
  )
}

export default UserNavbar