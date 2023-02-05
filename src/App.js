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
// Legediz
import LoginLegediz from "./pages/Legediz/Login";
import SignUpLegediz from "./pages/Legediz/SignUp";
import DocumentsLegediz from "./pages/Legediz/Documents";
import FinishedLegediz from "./pages/Legediz/Success";
import TypeLegediz from "./pages/Legediz/Type";
// MotorCycle
import LoginMotorcycle from "./pages/Motorcycle/Login";
import SignUpMotorcycle from "./pages/Motorcycle/SignUp";
import Success from "./pages/Motorcycle/Success";
import DocumentMotorcycle from "./pages/Motorcycle/Document";
import TypeMotorcycle from "./pages/Motorcycle/Type";
// Car
import LoginCar from "./pages/Car/Login";
import SignUpCar from "./pages/Car/SignUp";
import DocumentsCar from "./pages/Car/Documents";
import SuccessCar from "./pages/Car/Success";
import TypeCar from "./pages/Car/Type";

function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
  console.log('loggedIn:', loggedIn)
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count-down" element={<Countdown />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/auth/login" element={loggedIn ? <PickUp/> : <Login/>}/>
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/pick-up" element={<PickUp />} />
          <Route path="/our-centers" element={<OurCenters />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/delivery-details" element={<DeliveryDetails />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/track-order" element={<Track />} />
          <Route path="/order-overview" element={<TrackOverview />} />
          <Route path="/pickup-overview" element={<PickupOverview />} />
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/legediz/login" element={<LoginLegediz />} />
          <Route path="/legediz/sign-up" element={<SignUpLegediz />} />
          <Route path="/legediz/documents" element={<DocumentsLegediz />} />
          <Route path="/legediz/type" element={<TypeLegediz />} />
          <Route path="/legediz/success" element={<FinishedLegediz />} />
          <Route path="/motorcycle/login" element={<LoginMotorcycle />} />
          <Route path="/motorcycle/sign-up" element={<SignUpMotorcycle />} />
          <Route path="/motorcycle/type" element={<TypeMotorcycle />} />
          <Route path="/motorcycle/success" element={<Success />} />
          <Route path="/motorcycle/document" element={<DocumentMotorcycle />} />
          <Route path="/car/login" element={<LoginCar />} />
          <Route path="/car/sign-up" element={<SignUpCar />} />
          <Route path="/car/document" element={<DocumentsCar />} />
          <Route path="/car/success" element={<SuccessCar />} />
          <Route path="/car/type" element={<TypeCar />} />
          <Route path="/about" element={<About/>} />
          <Route path="/continue" element={<Continue/>} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
