import React from 'react';
import BackToMain from './BackToMain';
import Footer from './Footer';
import "../styles/ProjectStyles.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import guitar from "../images/guitar_crop.png";

function Guitar() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> FPGA Guitar Hero</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p> FPGA Guitar Hero was a project that sought to replicate the functionality of the game 
                    “Guitar Hero” using a DE-10 Lite FPGA, I2C Wii Controllers, and a VGA display. For the 
                    controls, the users had the option between using a Wii Nunchucks or a Wii guitar 
                    controller. In order to allow the FPGA to communicate with the controllers and read the 
                    button inputs, we wrote modules for an I2C hardware driver in systemVerilog. In 
                    addition, we also wrote a VGA driver that allowed us to easily display moving blocks on 
                    the connected display. We stored the music note data in the FPGA’s Read Only Memory, 
                    which was continually read during gameplay in order to properly display the correct 
                    notes. We synced the moving note blocks to correspond with the song “I’ll Make a Man 
                    Out of You”, and we showcased this project at the end of the year IEEE Projects 
                    Showcase at UCLA.
                  </p>
                  <div className="socials">
                        <a href="https://github.com/nnguyendinh/FPGA-Hero">
                            <GitHubIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={guitar} alt="OOP" className="image"/>
                  <h3>
                    <b>Skills:</b> RTL Design, SystemVerilog, I2C, VGA, Quartus
                  </h3>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Guitar;