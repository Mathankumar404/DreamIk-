import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main.jsx";
import Prod from "./components/Prod.jsx";
import Nav from "./components/Nav.jsx";
import Personalize from "./components/Personalize.jsx";
const App = () => {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Prod />} />
          <Route path="/Personalize" element={<Personalize />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
