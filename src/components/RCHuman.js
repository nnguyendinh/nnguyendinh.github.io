import React from 'react';
import BackToMain from './BackToMain';
import Projects from './Projects';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import DescriptionIcon from '@mui/icons-material/Description';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RC from "../images/RCHuman_crop.png";
import TENS from "../images/TENS.png";

function RCHuman() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Remote Control Human</h1>
          <div className="flex-container" id="right">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>
                    As part of a hardware hackathon hosted at UCLA, my friends and I built what we call 
                    the Remote Control Human Project. The idea was simple: control a human being's movements
                    with nothing more than a video game controller. For the movement of the human, we combined 
                    two bioelectrical techniques: Galvanic Vestibular Stimulation (GVS) and Transcutaneous 
                    Electrical Nerve Stimulation (TENS). The GVS applies small electrical currents to the 
                    vestibular system in the inner ear, which can induce a sensation of movement or balance shifts. 
                    The TENS applies electrical stimulation to peripheral nerves, which can cause muscle contractions 
                    and movements. An ESP32 microcontroller served as the brain of the system, translating button 
                    inputs from our keyboard to carefully regulated electrical signals that would be sent to the human's body. 
                    Linked below is a video demonstration of the project, as well as the full hackathon presentation 
                    detailing the project and its implementation.
                  </p>
                  <div className="socials">
                        <a href="https://docs.google.com/presentation/d/1XsR6Zvm-6H3zSP3aZwPjsEY8S99hFH0lc57g0lIQtnw/edit?usp=sharing">
                            <DescriptionIcon/>   
                        </a>
                        <a href="https://www.youtube.com/watch?v=3AeRVm21ogo">
                            <YouTubeIcon/>
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={TENS} alt="TENS Unit Stimulation" className="image"/>
                  <h3>
                    <b>Skills:</b> Embedded Systems, Bluetooth, Analog Circuit Design, C/C++, Electrical Stimulation
                  </h3>
              </div>
          </div>
          <div className="flex-container" id="left">
              <div className="flex-child">
                  <img src={RC} alt="Remote Control Human" className="image"/>
              </div>
              <div className="flex-child">
                  <p>The human subject wore a custom-designed vest that housed the electrodes for both GVS and TENS stimulation.
                    To support the “operator,” we also integrated real-time video streaming, giving them a third-person view for feedback.
                    For the hackathon we framed the project as a playful exploration of how this technology can be used for non-invasive 
                    control of human movement with potential applications in assistive devices for people with mobility impairments 
                    or in rehabilitation settings. The project won second place in the hackathon, and we were able to demonstrate the 
                    system's capabilities on many live test subjects. No long-term harm was done to any of the participants, 
                    and the hardware was carefully designed to adhere to safe limits for electrical stimulation on the human body.
                  </p>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default RCHuman;