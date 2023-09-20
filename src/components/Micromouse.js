import React from 'react';
import Projects from './Projects';
import BackToMain from './BackToMain';
import "../styles/ProjectStyles.css";
import proj1 from "../images/proj1.jpg";

function Micromouse() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Micromouse </h1>
          <img src={proj1} />
        <h3>
          <b>Skills:</b> Embedded Progamming, C, STM32, PCB Design, Soldering, 3D Printing
        </h3>
        <p>
          Micromouse is a competition where teams build autonomous robots to solve a 16x16 maze. 
          The robot must be able to navigate to the center of the maze in the shortest amount of time.
          The robot must also be able to map the maze and find the shortest path to the center.
        </p>

      </div>
    </div>
  );
}

export default Micromouse;