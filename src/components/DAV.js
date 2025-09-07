import React from 'react';
import BackToMain from './BackToMain';
import Projects from './Projects';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import dav from "../images/dav_crop.png";

function DAV() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Digital Audio Visualizer</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>The digital audio visualizer is a personal project that utilizes a DE-10 Lite 
                      FPGA as a digital signal processor. The FPGA receives audio inputs in real 
                      time through an external microphone, and then it extracts the frequency content 
                      of the incoming audio and displays it on an external VGA display in real time. Audio 
                      data samples are collected utilizing the onboard ADC of the DE-10 Lite. The FPGA 
                      is configured to take these audio samples and conduct a 32 point radix 2 decimation 
                      in time FFT operation over a period of four clock cycles. The output is then 
                      the corresponding frequency content, which is then visualized onto the VGA display. 
                      The project is implemented using SystemVerilog and was simulated using QuestaSim. 
                      Linked below is the full GitHub repository containing the project files,
                      including the RTL design and testbenches used for simulation.
                  </p>
                  <div className="socials">
                        <a href="https://github.com/nnguyendinh/FPGA-Digital-Audio-Visualizer">
                            <GitHubIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={dav} alt="DAV" className="image"/>
                  <h3>
                    <b>Skills:</b> RTL Design, SystemVerilog, VGA, Quartus, QuestaSim
                  </h3>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default DAV;