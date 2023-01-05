import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import ScrollToTop from "./pages/Top";
import PickUp from "./pages/PickUp";
import OurCenters from "./pages/OurCenters";
import Countdown from "./pages/Countdown";
import Experience from "./pages/Experience";
import DeliveryDetails from "./pages/DeliveryDetails";
// Legediz
import LoginLegediz from "./pages/Legediz/Login";
import SignUpLegediz from "./pages/Legediz/SignUp";
import DocumentsLegediz from "./pages/Legediz/Documents";
// MotorCycle
import LoginMotorcycle from "./pages/Motorcycle/Login";
import SignUpMotorcycle from "./pages/Motorcycle/SignUp";
// Car
import LoginCar from "./pages/Car/Login";
import SignUpCar from "./pages/Car/SignUp";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count-down" element={<Countdown />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/pick-up" element={<PickUp />} />
          <Route path="/our-centers" element={<OurCenters />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/delivery-details" element={<DeliveryDetails />} />
          <Route path="/legediz/login" element={<LoginLegediz />} />
          <Route path="/legediz/sign-up" element={<SignUpLegediz />} />
          <Route path="/legediz/documents" element={<DocumentsLegediz />} />
          <Route path="/motorcycle/login" element={<LoginMotorcycle />} />
          <Route path="/motorcycle/sign-up" element={<SignUpMotorcycle />} />
          <Route path="/car/login" element={<LoginCar />} />
          <Route path="/car/sign-up" element={<SignUpCar />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
