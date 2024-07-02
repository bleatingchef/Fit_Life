import React from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Class from "./pages/Class";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Class" element={<Class/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
