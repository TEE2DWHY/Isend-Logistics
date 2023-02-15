// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container footer">
                <div>
                  <img className="logo" src="./images/logo.png" alt="logo-footer" />
                </div>
                {/* Company */}
                <div>
                    <ul>
                      <li className="footer-header">Company</li>
                      <a href='/about'><li>About</li></a>
                      <a href='our-centers'><li>Our Centers</li></a>
                      <li>FAQs</li>
                      <a href='/blog'><li>Blog</li></a>
                    </ul>
                </div>
                {/* Legal */}
                <div>
                  <ul>
                    <li className="footer-header">Legal</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                  </ul>
                </div>
                {/* Social Media */}
                <div>
                  <ul>
                    <li className="footer-header">Socials</li>
                    <li>support@isendapp.com</li>
                    <li>+234 703 482 3211</li>
                  </ul>
                </div>
            </div>
        </>
    )
}

export default Footer