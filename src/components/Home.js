import React from "react";
import "../styles/HomeStyles.css";

import nat from "../images/Nat.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

function Home () {

    return (
        <div className="home">
            <h2> Hi! I'm Nat Nguyendinh</h2>
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

                        I just earned my Bachelor's Degree in Computer 
                        Engineering at the University of California, 
                        Los Angeles, and I am starting my Master's 
                        Degree in Electrical Engineering at the University 
                        of Michigan, Ann Arbor this Fall 2025. 
                        I have multi-faceted interests in embedded 
                        systems, computer architecture, RTL design, digital 
                        signal processing, and whatever else piques my interest. 
                        My end goal is to keep expanding my knowledge in 
                        new areas and eventually become the jack of all 
                        trades within the digital field. I am always 
                        looking for new ways to apply what I learn, so 
                        please don't hesitate to connect with me!
                    </p>
                    <div className="socials">
                        <a href="https://github.com/nnguyendinh">
                            <GitHubIcon/>   
                        </a>
                        <a href="https://www.linkedin.com/in/nnguyendinh/">
                            <LinkedInIcon/>
                        </a>
                        <a href="mailto:nat.t.nguyendinh@gmail.com">
                            <EmailIcon/>
                        </a>
                        <a href="https://drive.google.com/file/d/1QdFmUF7BC0oYsZH5MeJcuEF10Q_VafiH/view?usp=drive_link">
                            <DescriptionIcon/>
                        </a>
                    </div>
                </div>
                <div className="flex-child">
                    <img src={nat} alt="Nat Nguyendinh" className="image"/>
                </div>
            </div>
        </div>
    );
}
  
export default Home