import React from 'react';
import BackToMain from './BackToMain';
import banos from "../images/bins.png";
import Footer from './Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectStyles.css";

function Banos() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> FPGA Guitar Hero</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>Bruin Baños is a web app created for a school project built for ranking 
                    restrooms on UCLA campus. Students rate their experiences with restrooms, 
                    and can submit reviews to other students. With Bruin Baños, users can 
                    make an informed decision on which campus restroom to use. Some of the 
                    features of the web app include reading and posting reviews of specific 
                    bathrooms, searching through a database of bathrooms, adding specific 
                    bathrooms to your favorites list, and viewing your favorites and posted 
                    reviews in your profile. We build the app using React and NodeJS, and we 
                    managed the user and bathroom data using Firebase.
                  </p>
                  <div className="socials">
                        <a href="https://github.com/nnguyendinh">
                            <GitHubIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={banos} alt="Banos" className="image"/>
                  <h3>
                    <b>Skills:</b> Embedded Progamming, C, STM32, PCB Design, Soldering, 3D Printing
                  </h3>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Banos;