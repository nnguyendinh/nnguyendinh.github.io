import React from 'react';
import BackToMain from './BackToMain';
import proj1 from "../images/proj1.jpg";
import "../styles/ProjectStyles.css";

function Detector() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Realtime Instrument Detector </h1>
          <img src={proj1} />
        <h3>
          <b>Skills:</b> Arduino, ESP32, C++, Python
        </h3>
        <p>
        The goal of this project was to create a 
        device that could analyze the frequency content 
        of different instruments (piano, guitar, and 
        voice) and identify them. This project was 
        meant to showcase how different instruments are 
        characterized in the frequency domain. We used 
        an ESP32 Dev Module and an external microphone 
        to capture and extract the frequency content of 
        the surrounding sound and display the spectrum 
        on an OLED display. We observed the 
        relationships between the harmonic frequencies 
        that characterized each instrument’s sound, and 
        we used those relationships to detect when one 
        instrument was playing versus another. Our 
        device was able to successfully and reliably 
        distinguish between the three different 
        instruments, indicating via an RGB LED which 
        instrument was currently playing.
        </p>
            INSERT SLIDE SHOW HERE
      </div>
    </div>
  );
}

export default Detector;