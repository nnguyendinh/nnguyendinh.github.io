import React from "react";
import Main from "./components/Main";
import Micromouse from "./components/Micromouse";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/micromouse" element={<Micromouse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
