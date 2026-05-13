import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer/>
    </div>
  );
}