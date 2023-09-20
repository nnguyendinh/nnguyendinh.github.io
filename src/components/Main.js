import React from 'react';
import Footer from "./Footer";
import Home from "./Home";
import Work from "./Work";
import Projects from "./Projects";
import Navbar from "./Navbar";
import "../styles.css";


function Main() {
    return (
        <div>
            <Navbar />
            <Home/>
            <Work/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Main;