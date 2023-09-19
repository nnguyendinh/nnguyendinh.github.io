import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Work/>
      <Projects/>
      <Footer/>
    </div>
  );
}
