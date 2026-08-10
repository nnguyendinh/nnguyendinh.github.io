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
                    <p>Wow fancy seeing you here! Since you've made it all 
                        the way out here, I'm guessing you're part one of 
                        two groups, either a friend/family of mine, or someone
                        from the corporate world looking over me as a potential candidate. 
                        If you're part of the former group, feel free to peruse my projects, 
                        and if anyone asks about me, please only have positive 
                        things to say. If you're part of the latter group, 
                        feel free to talk to anyone from the former group if you 
                        need a reference for my character and experience! <br/> <br/>
                        
                        In the event that there's no one from the first group 
                        here to vouch for me, I suppose I can introduce myself. 
                        My name is Nat, I'm an Electrical Engineering Master's student graduating
                        from the University of Michigan in December 2026, and I love generating 
                        shareholder value. I have multi-faceted 
                        interests in the realms of computer architecture, 
                        RTL design, digital signal processing, embedded firmware, 
                        and every layer of HW/SW stack in between. 
                        My end goal is to keep expanding my knowledge in 
                        new areas and eventually become the jack of all 
                        trades within the digital field. Below this text blob 
                        you'll find some pretty buttons that link to my github, linkedin, email, 
                        and comprehensive resume if that's you're kind of thing. Otherwise,
                        feel free to look around at some of my internships, projects, 
                        and research work that's made me into the engineer I am today!
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
                        <a href="https://drive.google.com/file/d/1nI0ruxZg6e4FQ4OcY5eOvU4Hz0Kq1o7y/view?usp=sharing">
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