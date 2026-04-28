import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./COMPONANT/HOME.JS";
import Prices from "./COMPONANT/PRICES.JS";
import Team from "./COMPONANT/TEAM.JS";
import Footer from "./COMPONANT/FOOTER.JS";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/footer" element={<Footer />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;