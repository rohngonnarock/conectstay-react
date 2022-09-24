import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FoodService from "./pages/FoodService";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Locations from "./pages/Locations";
import Mice from "./pages/Mice";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/locations" element={<Locations />} />
        <Route exact path="/hotels" element={<Hotels />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/mice" element={<Mice />} />
        <Route exact path="/food-service" element={<FoodService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
