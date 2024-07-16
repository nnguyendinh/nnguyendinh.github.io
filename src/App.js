import React from "react";
import Main from "./components/Main";
import Micromouse from "./components/Micromouse";
import DAV from "./components/DAV";
import OOP from "./components/OOP";
import Guitar from "./components/Guitar";
import WRAP from "./components/WRAP";
import Banos from "./components/Banos";
import Bins from "./components/Bins";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/micromouse" element={<Micromouse />} />
          <Route path="/digital-audio-visualizer" element={<DAV />} />
          <Route path="/risc-v-processor" element={<OOP />} />
          <Route path="/bruin-bins" element={<Bins />} />
          <Route path="/guitar-hero" element={<Guitar />} />
          <Route path="/wrap" element={<WRAP />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
