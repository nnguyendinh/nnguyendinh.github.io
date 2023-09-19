import React from "react";
import { Component } from 'react';
import "../styles/HomeStyles.css";

import teaching from "../images/teaching.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

class Home extends Component {

    render() 
    {
      return (
        <div className="home"> 
            <div className="about">
                <h2> Nathan Nguyendinh</h2>
                <div className="description">
                    <p>The one thing I value most in life is learning. 
                        Whether it be learning new things myself, or 
                        helping others learn something, I find no 
                        satisfaction greater than watching the brain’s 
                        gears begin to turn. I am lucky to have had so 
                        many opportunities to gain new knowledge and 
                        to spread that knowledge, and I hope to continue 
                        doing both far into the future. <br/> <br/>

                        Right now, I currently study Computer Engineering 
                        at the University of California, Los Angeles, where 
                        I focus on embedded systems, RTL design, signal 
                        processing, and whatever else piques my interest. 
                        My end goal is to keep expanding my knowledge in 
                        new areas and eventually become the jack of all 
                        trades within the digital field. I am always 
                        looking for new ways to apply what I learn, so 
                        please don’t hesitate to connect with me!
                    </p>
                    <img src={teaching} alt="Teaching" className="image"/>
                </div>
                <div className="socials">
                    <a href="https://github.com/nnguyendinh">
                        <GitHubIcon/>   
                    </a>
                    <a href="https://www.linkedin.com/in/nathan-nguyendinh/">
                        <LinkedInIcon/>
                    </a>
                    <a href="mailto:nnguyendinh@g.ucla.edu">
                        <EmailIcon/>
                    </a>
                    <a href="https://github.com/nnguyendinh">
                        <DescriptionIcon/>
                    </a>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home