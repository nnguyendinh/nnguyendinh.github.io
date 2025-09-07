import React from 'react';
import BackToMain from './BackToMain';
import Projects from './Projects';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import DescriptionIcon from '@mui/icons-material/Description';
import adder from "../images/adder.png";

function Adder() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> 16-Bit Adder Layout</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>For my Digital Electronics design course, I worked on building and optimizing a 16-bit full adder from 
                    the transistor level all the way to physical layout. Starting with a one-bit full adder 
                    implemented in static CMOS, we explored tradeoffs between ripple carry, carry select, and 
                    carry bypass architectures, ultimately choosing a transmission-gate ripple carry design 
                    for its balance of speed and power efficiency. Through circuit simulations, we analyzed 
                    propagation delays, power scaling with clock frequency, and energy-delay product (EDP) 
                    across different supply voltages. Finally, we created a full Cadence layout of the adder, 
                    carefully minimizing parasitics and critical path length to minimize layout area. This 
                    project was a hands-on deep dive into digital circuit design, performance optimization, 
                    and physical layout for VLSI systems. Linked below is the full report detailing the design process,
                    simulation results, and layout considerations.
                  </p>
                  <div className="socials">
                        <a href="https://docs.google.com/document/d/1aXPf78HyIB6O_wUJynMP-dtOf6Ztssqvw-rbxqzJiMM/edit?usp=sharing">
                            <DescriptionIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={adder} alt="Adder Layout" className="image"/>
                  <h3>
                    <b>Skills:</b> Layout, Analog Circuit Design, Cadence Virtuoso, Spectre
                  </h3>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Adder;