import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import "../styles/FooterStyles.css";

function Footer () {

    return (
    <div className="footer"> 
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
            <a href="https://drive.google.com/file/d/1OqHotVsMY-AFcHkizlYwCz-JumrUTqFa/view?usp=sharing">
                <DescriptionIcon/>
            </a>
        </div>
    <p> &copy; 2023 nnguyendinh.github.io</p>
    </div>
    );
}
  
  export default Footer