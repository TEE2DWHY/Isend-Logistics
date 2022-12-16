import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import ScrollToTop from "./pages/Top";
import PickUp from "./pages/PickUp";
import OurCenters from "./pages/OurCenters";
import Countdown from "./pages/Countdown";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Countdown />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/pick-up" element={<PickUp />} />
          <Route path="/our-centers" elemeant={<OurCenters />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
