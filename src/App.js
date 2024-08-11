import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} />
        <Route path="/Recipes" element={<Recipes />} /> */}
      </Routes>
    </div>
  );
}

export default App;
