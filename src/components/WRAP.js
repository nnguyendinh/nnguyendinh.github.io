import React from 'react';
import BackToMain from './BackToMain';
import Projects from './Projects';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import wrap from "../images/wrap.png";
import waveforms from "../images/waveforms.png";
import GitHubIcon from '@mui/icons-material/GitHub';

function WRAP() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay" id='MM'>
        <h1> Wireless RF Analog Project</h1>
          <div className="flex-container" id='right'>
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>The Wireless RF Analog Project (WRAP) is an ongoing advanced project focused on wireless digital communications 
                      and RF circuits. As part of IEEE at UCLA, WRAP teaches students a variety of circuits topics used 
                      in wireless transmitter and receiver  design, including amplifiers, 
                      mixers, and oscillators. On the signal processing side, WRAP covers the 
                      fundamentals of digital communication, digital filtering, and other 
                      techniques used in real- world communication systems. As the year 
                      progresses, students will use this knowledge to design, build, and test 
                      a physical wireless communication system. During my junior year, I participated on the signal processing
                      team, where I was responsible for taking the MATLAB simulation code and converting it to C++ code that could be run on an 
                      our STM32 microcontrollers. By the end of the year, we were able to reliably transmit and receive multi-character messages
                      across more than 50 feet of space.
                  </p>
                  <div className="socials">
                        <a href="https://github.com/IEEE-UCLA-WRAP">
                            <GitHubIcon/>   
                        </a>
                        <a href="https://www.youtube.com/watch?v=l7G67jQi_WY">
                            <YouTubeIcon/>
                        </a>
                  </div>
              </div>
              <div className="flex-child">
                  <img src={wrap} alt="Wrap System" className="image"/>
                  <h3>
                    <b>Skills:</b> Embedded C, MATLAB, Communication Systems, Digital Filtering, Software-Defined Radios
                  </h3>
              </div>
          </div>
          <div className="flex-container" id="left">
              <div className="flex-child">
                  <img src={waveforms} alt="Communication Waveforms" className="image"/>
              </div>
              <div className="flex-child">
                  <p>For my senior year of college, I will be one of two team leads for this ongoing project. 
                    As the team lead of the signal processing team, I will be responsible for teaching 
                    new members the basics of digital communication, as well as guiding them through the
                    process of designing and implementing a wireless communication system. This will involve
                    teaching them how to use MATLAB to simulate the system, and then converting the simulation
                    to C++ code that can be run on our microcontrollers, as well as debugging the system. My main interests
                    within this project lie within the embedded systems implementation side of things, but I am 
                    excited to take on this leadership role and help the new members take their first steps into 
                    the world of wireless communications.
                  </p>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default WRAP;

