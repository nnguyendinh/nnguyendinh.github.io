import React from 'react';
import BackToMain from './BackToMain';
import proj1 from "../images/proj1.jpg";
import "../styles/ProjectStyles.css";

function DAV() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Digital Audio Visualizer </h1>
          <img src={proj1} />
        <h3>
          <b>Skills:</b> Embedded Progamming, C, STM32, PCB Design, Soldering, 3D Printing
        </h3>
        <p>
          The digital audio visualizer is an ongoing project that utilizes a DE-10 Lite 
          FPGA as a digital signal processor. The main flow of the project is the FPGA 
          will receive audio inputs in real time through an external microphone, and then 
          it will display the resulting frequency spectrum on an external display. Audio 
          data samples are collected utilizing the onboard ADC of the DE-10 Lite, The 
          coded FFT processor takes in the audio data and calculates the 16 point radix 
          2 decimation in time FFT, over a period of four clock cycles. The output is the 
          corresponding frequency content, which is then visualized onto the VGA display. 
        </p>
        INSERT GITHUB HERE
      </div>
    </div>
  );
}

export default DAV;