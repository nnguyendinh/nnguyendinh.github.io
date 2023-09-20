import React from "react";
import Main from "./components/Main";
import Micromouse from "./components/Micromouse";
import DAV from "./components/DAV";
import Detector from "./components/Detector";
import Banos from "./components/Banos";
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
          <Route path="/risc-v-processor" element={<DAV />} />
          <Route path="/bruin-bins" element={<Banos />} />
          <Route path="/guitar-hero" element={<DAV />} />
          <Route path="/instrument-detector" element={<Detector />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
