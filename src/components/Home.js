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
                <div className="flex-container" id="about-me">
                    <div className="flex-child">
                        <h3> About Me </h3>
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
                    <div className="flex-child">
                        <img src={teaching} alt="Teaching" className="image"/>
                    </div>
                </div>
            </div>
            <h2> Work Experience</h2>
            <div className="flex-container" id="work-experience">
                <div className="flex-child">
                    <h3>UCLA IEEE</h3>
                    <p> <b>President</b> <br/>
                        <i>June 2021 - Present</i> <br/>
                        <ul>
                            <li>Lead the largest student organization at UCLA with over 1000 members</li>
                            <li>Manage a team of 20 officers and 100 volunteers</li>
                            <li>Organize and host events for students to learn about the field of electrical engineering</li>
                        </ul>
                    </p>
                </div>

                <div className="flex-child">
                        <img src={teaching} alt="Teaching" className="image"/>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home