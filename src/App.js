import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import AntiAnceFaceSerum from "./Components/AntiAnceFaceSerum";
import MoistureLockHydrating from "./Components/MoistureLockHydrating";
import NiacianamideFaceSerum from "./Components/NiacianamideFaceSerum";
import SalicylicAcidSerum from "./Components/SalicylicAcidSerum";
import SkinBrighteningFaceSerum from "./Components/SkinBrighteningFaceSerum";
import VitaminCFaceSerum from "./Components/VitaminCFaceSerum";
import HairSerum from "./Components/HairSerum";
import Instragram from "./assets/images/instagram.svg";
import Facebook from "./assets/images/Facebook.svg";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const instagramOpenNewTab = () => {
    window.open("https://www.instagram.com/scientistry_official/");
  };

  const facebookOpenNewTab = () => {
    window.open(
      "https://www.facebook.com/people/Scientistry_Official/100090493343700/?mibextid=ZbWKwL"
    );
  };

  return (
    <div className="flex flex-col gap-10 pb-5">
      <nav className="flex justify-between gap-5 p-5">
        <span className="tracking-widest font-medium font-mono">
          <Link to="/">SCIENTISTRY</Link>
        </span>

        <ul className="flex gap-5 tracking-widest font-medium font-mono">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/anti-acne" element={<AntiAnceFaceSerum />} />
        <Route
          path="/product/moisture-lock"
          element={<MoistureLockHydrating />}
        />
        <Route
          path="/product/niacinamide"
          element={<NiacianamideFaceSerum />}
        />
        <Route path="/product/salicylic" element={<SalicylicAcidSerum />} />
        <Route
          path="/product/skin-brightening"
          element={<SkinBrighteningFaceSerum />}
        />
        <Route path="/product/vitamin-c" element={<VitaminCFaceSerum />} />
        <Route path="/product/hair-serum" element={<HairSerum />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div
        className={`flex flex-col gap-5 items-center ${
          isHomePage ? "max-[580px]:pt-[30rem]" : ""
        }`}
      >
        <span className="font-medium font-mono text-xl">
          "Science above every Myth"
        </span>
        <div className="flex gap-5">
          <img
            src={Instragram}
            alt="instagram"
            className="cursor-pointer"
            onClick={instagramOpenNewTab}
          />
          <img
            src={Facebook}
            alt="facebook"
            className="cursor-pointer"
            onClick={facebookOpenNewTab}
          />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
