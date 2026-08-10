import React from 'react';
import BackToMain from './BackToMain';
import Projects from './Projects';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import DescriptionIcon from '@mui/icons-material/Description';
import arch from "../images/accelerator_arch.png";
import acc from "../images/accelerator.png";

function Accelerator() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Transfomer Attention Hardware Accelerator</h1>
          <div className="flex-container" id="right">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>
                    As part of EECS 627 at the University of Michigan, my team and I designed a 
                    multi-clock-domain hardware accelerator for transformer attention, 
                    built to handle both dense and sparse matrix multiplication efficiently. The 
                    chip integrates three types of compute modules — a Dense Matrix 
                    Multiplier (DMM), a Sparse Matrix Multiplier (SMM), and an Auxiliary Function 
                    Unit (AFU) that performs a divider-free, numerically stabilized 
                    softmax — each instantiated as two parallel cores. Because these modules have 
                    very different computational intensities, we ran each in its own 
                    clock domain (25 ns for the controller, 20 ns for the DMM, 8 ns for the SMM, 
                    and 4 ns for the AFU), connected through asynchronous FIFOs for 
                    clock domain crossing and each clock domain having its own asynchronous clock 
                    generator module. A custom 32-bit instruction set, executed by a 
                    centralized controller, orchestrates data movement and scheduling across all 
                    six cores without enforcing a fixed execution order.
                    
                  </p>
                  <div className="socials">
                        <a href="https://drive.google.com/file/d/1AI2sPUjiF_wjwCmnhUSWnfwL9f_fR7cu/view?usp=sharing">
                            <DescriptionIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={arch} alt="Accelerator Architecture" className="image"/>
                  <h3>
                    <b>Skills:</b> Embedded Systems, Bluetooth, Analog Circuit Design, C/C++, Electrical Stimulation
                  </h3>
              </div>
          </div>
          <div className="flex-container" id="left">
              <div className="flex-child">
                  <img src={acc} alt="Accelerator Layout" className="image"/>
              </div>
              <div className="flex-child">
                  <p>Our project spanned the whole end-to-end process of frontend RTL, 
                    synthesis, full physical design (floorplanning, place-and-route, DRC/LVS), 
                    and verification in an IBM 130nm CMOS process. The finished chip 
                    occupies 23.85 mm², consumes 211.7 mW, and delivers an equivalent throughput of 
                    66 GOPS, translating to a peak compute density of 2.77 GOPS/mm² and 
                    an energy efficiency of 0.312 TOPS/W. Most submodules reached DRC/LVS-clean, 
                    post-APR-verified status, and the full top-level design was floorplanned 
                    and integrated, but the final full-chip signoff was blocked by 
                    power-grid integration issues left unresolved due to limited time. 
                    Overall, it was a deep dive into practical challenges faced within the 
                    end-to-end SoC design process.

                  </p>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Accelerator;