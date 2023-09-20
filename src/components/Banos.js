import React from 'react';
import BackToMain from './BackToMain';
import proj1 from "../images/proj1.jpg";
import "../styles/ProjectStyles.css";

function Banos() {
  return (
    <div>
      <BackToMain/>
      <div className="projectDisplay">
        <h1> Digital Audio Visualizer </h1>
          <img src={proj1} />
        <h3>
          <b>Skills:</b> React, Firebase, HTML, CSS, JavaScript
        </h3>
        <p>
            Bruin Baños is a web app created for a school project 
            built for ranking restrooms on UCLA campus. Students 
            rate their experiences with restrooms, and can submit 
            reviews to other students. With Bruin Baños, users 
            can make an informed decision on which campus restroom 
            to use. Some of the features of the web app include 
            reading and posting reviews of specific bathrooms, 
            searching through a database of bathrooms, adding 
            specific bathrooms to your favorites list, and viewing 
            your favorites and posted reviews in your profile.
        </p>
        INSERT GITHUB HERE + SLIDE SHOW
      </div>
    </div>
  );
}

export default Banos;