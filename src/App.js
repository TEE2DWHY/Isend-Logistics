import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./pages/Top";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Continue from "./pages/Continue";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
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
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
        {/* Public Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/count-down" element={<Countdown />} />
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/about" element={<About/>} />
          <Route path="/continue" element={<Continue/>} />
          <Route path="/our-centers" element={<OurCenters />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/track-order" element={<Track />} />
          <Route path="/order-overview" element={<TrackOverview />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/terms-of-use" element={<Terms />} />
          {/* PrivateRoutes */}
          <Route element={<PrivateRoute/>}>
          <Route path="/auth/login" element={<Login/> }/>
          <Route path="/pick-up" element={<PickUp/> } />
          <Route path="/delivery-details" element={<DeliveryDetails/>} />
          <Route path="/pickup-overview" element={<PickupOverview />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
