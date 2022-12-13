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

                    <h5>Socials</h5>
                </div>
            </div>
        </>
    )
}

export default Footer