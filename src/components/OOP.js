import React from 'react';
import BackToMain from './BackToMain';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import oop from "../images/OOP_crop.png";

function OOP() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> RISC-V Out of Order Processor</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p> A collaborative class honors project of mine was to fully design and simulate an 
                    out-of-order, superscalar processor using systemVerilog. The processor was able to 
                    read in a file of binary encodings of RISC-V R-type, I-type, load, and store 
                    instructions. In order to allow for superscalar out-of-order execution of 
                    instructions, we developed modules for multiple processor ALUs, a register alias 
                    table, the reservation station, the reorder buffer, and more. We simulated this 
                    design within QuestaSim to confirm a significant speedup compared to the example 
                    in-order processor given. Potential future goals include developing the modules to 
                    be fully synthesizable such that we can run the processor on an FPGA. 
                  </p>
                  <div className="socials">
                        <a href="https://github.com/nnguyendinh/M116C-Honors">
                            <GitHubIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={oop} alt="OOP" className="image"/>
                  <h3>
                    <b>Skills:</b> RTL Design, SystemVerilog, RISC-V, Computer Architecture, Quartus, QuestaSim
                  </h3>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default OOP;