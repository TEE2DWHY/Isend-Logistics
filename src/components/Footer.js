import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <h1>Logo</h1>

                    <ul>
                        <li>Our Centers </li>
                        <li> Surulere</li>
                        <li>Ikorodu</li>
                        <li>Ajah </li>
                    </ul>

                    <ul>
                        <li> Company  </li>
                        <li>About </li>
                        <li>FAQs </li>
                        <Link to="/blog"><li> Blog</li></Link>
                    </ul>

                    <ul>
                        <li>Legal</li>
                        <Link to="/privacy-policy"><li>Privacy policy </li></Link>
                        <Link to="/terms-of-use"><li>Terms of Use</li></Link>
                    </ul>

                    <ul>
                        <li><span><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-twitter" style={{ paddingLeft: "20px" }}></i> <i className="fa-brands fa-instagram" style={{ paddingLeft: "20px" }}></i></span></li>
                        <li><p>support@isendapp.com</p></li>
                        <li><p>+234 703 482 3211</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer