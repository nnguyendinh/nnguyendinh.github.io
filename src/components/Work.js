import React from "react";
import "../styles/WorkStyles.css";

import northrop from "../images/northrop.webp";
import edg from "../images/edg.png";
import outreach from "../images/outreach_blur2.png";

function Work () {

    return (
    <div className="work"> 
        <h2> Work Experience</h2>
        <div className="flex-container" id="right">
            <div className="flex-child">
                <img src={northrop} alt="Space" className="image"/>
            </div>
            <div className="flex-child">
                <h3>Northrop Grumman Corporation</h3>
                <p> <b>Comm Systems Engineering Intern</b> <br/>
                    <i>June 2023 - September 2023</i> <br/>
                    <ul>
                        <li>Redesigned and optimized communication packet 
                            processing block of proprietary inter-FPGA 
                            communication protocol, enhancing throughput 
                            by 2x through addition of data forwarding and 
                            processing queues</li>
                        <li>Worked with FPGA designers to document the 
                            interfaces and design of communications 
                            channel decoder</li>
                        <li>Wrote 5+ Matlab scripts to assist RF 
                            engineers in efficiently plotting and 
                            verifying test data with unit specs</li>
                    </ul>
                </p>
            </div>
        </div>

        <div className="flex-container" id="left">
            <div className="flex-child">
                <h3>IEEE Student Branch at UCLA</h3>
                <p> <b>Outreach Coordinator</b> <br/>
                    <i>April 2023 - Present</i> <br/>
                    <ul>
                        <li>Organized and taught quarterly workshop 
                            series at 3 community colleges teaching 
                            basics of electrical engineering</li>
                        <li>Led committee to support the students of 
                            30+ communities and schools and promote 
                            interest in engineering</li>
                        <li>Interfaced with UCLA Engineering Transfer 
                            Center to host over 20 inter-collegiate 
                            events and collaborations</li>
                    </ul>
                </p>
            </div>
            <div className="flex-child">
                <img src={outreach} alt="Teaching" className="image"/>
            </div>
        </div>

        <div className="flex-container" id="right">
            <div className="flex-child">
                <img src={edg} alt="Lab IDE" className="image"/>
            </div>
            <div className="flex-child">
                <h3>Laboratory for Embedded Machines & Ubiquitous Robots</h3>
                <p> <b>Undergraduate Researcher</b> <br/>
                    <i>June 2022 - January 2023</i> <br/>
                    <ul>
                        <li>Assisted development of experimental PCB 
                            design IDE allowing definition of 
                            schematics through an HDL</li>
                        <li>Automated extraction of data from KiCad 
                            schematics to streamline building of 
                            internal parts libraries for the IDE</li>
                        <li>Tested workflow and practicality of the 
                            IDE by designing and assembling 3 
                            iterations of prototype test boards</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    );
}

export default Work