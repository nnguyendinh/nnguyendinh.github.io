import React from 'react';
import Footer from './Footer';
import BackToMain from './BackToMain';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectStyles.css";
import rat from "../images/micromouse_crop.jpg";
import PCB from "../images/PCB.png";
import competition from "../images/competition_crop.jpg";

function Micromouse() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay" id='MM'>
        <h1> Micromouse</h1>
          <div className="flex-container" id='right'>
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>Micromouse is an autonomous maze-solving robot competition that I have 
                    participated in for the past two years. The IEEE student branch at UCLA 
                    has a program to teach students how to build these maze-solving robots 
                    from scratch, which is how I initially got involved in the competition. 
                    My freshman year, I participated in the program and learned the basics 
                    of embedded systems and PCB design. That year, my partner and I achieved 
                    the second fastest time at the inter-university competition held at UCLA.
                  </p>
                  <div className="socials">
                        <a href="https://github.com/nnguyendinh/Micromouse-2022-2023">
                            <GitHubIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child">
                  <img src={rat} alt="Rat" className="image"/>
                  <h3>
                    <b>Skills:</b> Embedded Progamming, C, STM32, PCB Design, Soldering, 3D Printing
                  </h3>
              </div>
          </div>
          <div className="flex-container" id="left">
              <div className="flex-child">
                  <img src={competition} alt="competition" className="image"/>
              </div>
              <div className="flex-child">
                  <p>During my second year of college, I was selected as one of the two 
                    leads for the UCLA Micromouse program, where I would be in charge of 
                    hosting lectures, creating assignments, leading debug sessions, 
                    ordering parts, and organizing the end of year competition with the 
                    other schools. This was a defining experience for me because it 
                    allowed me to feel like I had an impact on the students that I 
                    mentored. I also competed in the competition again that year, where 
                    I earned first among the 15 teams competing. 
                  </p>
              </div>
          </div>
          <div className="flex-container" id="right">
              <div className="flex-child">
                  <p>This year, I plan to iterate on my design once more and compete again 
                    in the local UCLA competition, as well as sign up for APEC, which is 
                    the highest level Micromouse competition in the US. For this new 
                    iteration I am experimenting with different motor-encoder combinations, 
                    different peripherals, and a complete redesign of the PCB. Micromouse 
                    has been such a fun and rewarding experience for me, and I am excited 
                    to see how far I can push myself this year.
                  </p>
              </div>
              <div className="flex-child">
                  <img src={PCB} alt="PCB" className="image"/>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Micromouse;