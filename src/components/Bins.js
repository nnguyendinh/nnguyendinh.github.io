import React from 'react';
import BackToMain from './BackToMain';
import bins from "../images/bins.png";
import Projects from './Projects';
import Footer from './Footer';
import DescriptionIcon from '@mui/icons-material/Description';
import "../styles/ProjectStyles.css";

function Bins() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> FPGA Guitar Hero</h1>
          <div className="flex-container">
              <div className="flex-child">
                  <h2> Overview </h2>
                  <p>During the school year of 2021-2022, UCLA implemented takeout dining in all of 
                    its residential communities, leading to many of the trash cans in those areas 
                    to overflow and not be properly maintained. Bruin Bins was a prototype for an 
                    integrated network of smart trash cans that help UCLA monitor and track the 
                    statuses of trash cans on the campus. Each trash can had the ability to track 
                    its fullness levels, lock and unlock, display current status on its screen, and 
                    send its location and status over wifi. Users would be able to use a web app to 
                    locate the nearest non-full trash can. Administrators would be notified over SMS 
                    whenever a trash can was full, and they could use the web app to unlock and lock 
                    trash cans over wifi for proper maintenance. We built the hardware using Arduino 
                    IDE on an ESP32 microcontroller, and we built the web app using React, NodeJS, 
                    and Firebase.
                  </p>
                  <div className="socials">
                        <a href="https://docs.google.com/presentation/d/1YEGli1kS9UJksuIp3AyJZpbd4qUiQKHC0WPS-4sNpAk/edit?usp=sharing">
                            <DescriptionIcon/>   
                        </a>
                  </div>
              </div>
              <div className="flex-child" id='right'>
                  <img src={bins} alt="Bins" className="image"/>
                  <h3>
                    <b>Skills:</b> Embedded Progamming, C++, ESP32, React, JavaScript, NodeJS, Firebase
                  </h3>
              </div>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Bins;