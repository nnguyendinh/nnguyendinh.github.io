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
                  <p>The digital audio visualizer is an ongoing project that utilizes a DE-10 Lite 
                      FPGA as a digital signal processor. The main flow of the project is the FPGA 
                      will receive audio inputs in real time through an external microphone, and then 
                      it will display the resulting frequency spectrum on an external display. Audio 
                      data samples are collected utilizing the onboard ADC of the DE-10 Lite, The 
                      coded FFT processor takes in the audio data and calculates the 16 point radix 
                      2 decimation in time FFT, over a period of four clock cycles. The output is the 
                      corresponding frequency content, which is then visualized onto the VGA display. 
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