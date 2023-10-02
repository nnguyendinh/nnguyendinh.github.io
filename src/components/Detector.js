import React from 'react';
import BackToMain from './BackToMain';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import DescriptionIcon from '@mui/icons-material/Description';
import realtime from "../images/realtime_crop.jpg";

function Detector() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Realtime Instrument Detector</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>The goal of this project was to create a device that could analyze the 
                    frequency content of different instruments (piano, guitar, and voice) 
                    and identify them. This project was meant to showcase how different 
                    instruments are characterized in the frequency domain. We used an ESP32 
                    Dev Module and an external microphone to capture and extract the 
                    frequency content of the surrounding sound and display the spectrum on 
                    an OLED display. We observed the relationships between the harmonic 
                    frequencies that characterized each instrument’s sound, and we used 
                    those relationships to detect when one instrument was playing versus 
                    another. Our device was able to successfully and reliably distinguish 
                    between the three different instruments during the live project 
                    demonstration.
                  </p>
                  <div className="socials">
                        <a href="https://docs.google.com/presentation/d/1O7WE2Kp-jimep8dUAdUqF-IGrhP6YWdc5p3IvnM8mOk/edit?usp=drive_link">
                            <DescriptionIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={realtime} alt="Realtime" className="image"/>
                  <h3>
                    <b>Skills:</b> Embedded Progamming, C++, Arduino, Frequency Analysis
                  </h3>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Detector;