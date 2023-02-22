import logo from "../assets/images/logo.png"

const Footer = () => {
    return (
        <>
            <div className="container footer">
                <div>
                  <img className="logo" src={logo} alt="logo-footer" />
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
                    <a href="/privacy-policy"><li>Privacy Policy</li></a>
                    <a href="/terms-of-use"><li>Terms of Use</li></a>
                  </ul>
                </div>
                {/* Social Media */}
                <div>
                  <ul>
                    <li className="footer-header">Socials</li>
                    <a href="mailto:support@isendapp.com"><li>support@isendapp.com</li></a>
                    <a href="tel:07034823211"><li>+234 703 482 3211</li></a>
                  </ul>
                </div>
            </div>
        </>
    )
}

export default Footer