import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About";
import Blog from "./pages/Blog";
import Continue from "./pages/Continue";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import ScrollToTop from "./pages/Top";
import PickUp from "./pages/PickUp";
import OurCenters from "./pages/OurCenters";
import Countdown from "./pages/Countdown";
import Experience from "./pages/Experience";
import DeliveryDetails from "./pages/DeliveryDetails";
import Guidelines from "./pages/Guidelines";
import Track from "./pages/Track";
import TrackOverview from "./pages/TrackOverview.js";
import PickupOverview from "./pages/PickupOverview";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  const loggedIn = sessionStorage.getItem("loggedIn")
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count-down" element={<Countdown />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth" element={loggedIn ? <Auth/> : <Home/> }/>
          <Route path="/auth/login" element={loggedIn ? <PickUp/> : <Login/>}/>
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/pick-up" element={loggedIn ? <PickUp /> : <Login/>} />
          <Route path="/our-centers" element={<OurCenters />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/delivery-details" element={loggedIn ? <DeliveryDetails /> : <Home/>} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/track-order" element={<Track />} />
          <Route path="/order-overview" element={<TrackOverview />} />
          <Route path="/pickup-overview" element={loggedIn ? <PickupOverview /> : <Home/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/continue" element={<Continue/>} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
