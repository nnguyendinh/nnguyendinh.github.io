import React from 'react';
import BackToMain from './BackToMain';
import Projects from './Projects';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import DescriptionIcon from '@mui/icons-material/Description';
import edram from "../images/edram_crop.png";

function EDRAM() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Embedded DRAM Design Project</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>The eDRAM Design Project was a course project for ECE 215B at UCLA that involved 
                    designing a 128×128 embedded DRAM (eDRAM) memory array in 45 nm technology. 
                    Our team’s design incorporated row and column decoders, sense amplifiers, 
                    precharge circuits, and peripheral logic to enable high-speed and energy-efficient 
                    memory access. I focused on architecting the overall memory array structure, 
                    designing the column decoder, and implementing accurate interconnect modeling 
                    with RC parasitics to capture realistic performance. Through 
                    extensive Cadence simulations, we verified full read/write functionality, 
                    measured a 1.6 ns read delay, 2 ns write delay, ~14 pJ/bit energy efficiency, 
                    and confirmed a 31 μs data retention time under worst-case conditions. This project
                    taught me a lot about the inner workings of memory designs and the tradeoffs involved
                    in optimizing for speed, power, and area, and data retention time in memory architectures.
                    The full report detailing the design process, simulation results, and layout considerations
                    is linked below.
                  </p>
                  <div className="socials">
                        <a href="https://drive.google.com/file/d/15vEeWFnzEd9XZbwjQQcrSpDJHmJ0eh2K/view?usp=sharing">
                            <DescriptionIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={edram} alt="edram" className="image"/>
                  <h3>
                    <b>Skills:</b> Analog Circuit Design, Cadence Virtuoso, Spectre, Memory Architecture Design
                  </h3>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default EDRAM;