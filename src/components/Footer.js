// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Our Centers</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><span class="nav-link p-0 text-muted">Surulere</span></li>
          <li class="nav-item mb-2"><span class="nav-link p-0 text-muted">Ikorodu</span></li>
          <li class="nav-item mb-2"><span class="nav-link p-0 text-muted">Ajah</span></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Our Company</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/about" class="nav-link p-0 text-muted">About</a></li>
          <li class="nav-item mb-2"><a href="/faq" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/blog" class="nav-link p-0 text-muted">Blog</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Legal</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/privacy-policy" class="nav-link p-0 text-muted">Privacy Policy</a></li>
          <li class="nav-item mb-2"><a href="/terms-of-use" class="nav-link p-0 text-muted">Terms of Use</a></li>
        </ul>
      </div>

      {/* <div class="col-md-5 offset-md-1 col-6 col-md-2 mb-">
      <ul class="d-flex">
        <li class="ms-3"><span class="link-dark">Facebook</span></li>
        <li class="ms-3"><span class="link-dark">Instagram</span></li>
        <li class="ms-3"><span class="link-dark">Twitter</span></li>
      </ul>
      </div> */}
    </div>

  </footer>
</div>
        </>
    )
}

export default Footer