import React from 'react';
import BackToMain from './BackToMain';
import Projects from './Projects';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import DescriptionIcon from '@mui/icons-material/Description';
import oop from "../images/472_arch.png";

function OOP() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Multithreaded Out of Order Processor</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p> If you know any electrical engineering major from the University of Michigan, they
                    will know this as the infamous "EECS 470 Project". For those not in the know, this was 
                    a collaborative class project where over the course of a semester, groups fully design 
                    and synthesize and out-of-order, super scalar processor supporting the full RISC-V 
                    instruction set with SystemVerilog. For our design, we implemented a 2-issue, 6-stage 
                    processor based off of Intel's P6 architecture with simultaneous multi-threading (SMT). 
                    While iteratively developing the modules, we developed various tcl scripts to streamline 
                    the synthesis, simulation, and debugging process with the synopsys toolchain. In order to 
                    optimize CPI and area, we experimented with many different branch predictors, structure 
                    sizes, and cache configurations. Throughout the design process we also constantly reworked 
                    and rearranged our logic to be able to get the most optimal performance post-synthesis. 
                    Linked below is the project report if you want to learn more about the 
                    different design decisions we made and our final product.
                  </p>
                  <div className="socials">
                        <a href="https://drive.google.com/file/d/18WoqQ-VbNjvQpDSy2Zsmy8OYFbKZVlhB/view?usp=sharing">
                            <DescriptionIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={oop} alt="OOP" className="image"/>
                  <h3>
                    <b>Skills:</b> RTL Design, SystemVerilog, RISC-V, Computer Architecture, VCS, Verdi, Tcl
                  </h3>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default OOP;