import React from "react";
import "../styles/WorkStyles.css";

import northrop from "../images/ng-beige.png";
import edg from "../images/edg.png";
import keysight from "../images/keysight-beige.png";
import syssarch from "../images/syssarch-beige.png";

function Work () {

    return (
    <div className="work"> 
        <h2> Work Experience</h2>
        <div className="flex-container" id="right">
            <div className="flex-child">
                <img src={keysight} alt="Keysight" className="image"/>
            </div>
            <div className="flex-child">
                <h3>Keysight Technologies</h3>
                <p> <b>R&D Hardware Engineering Intern</b> <br/>
                    <i>June 2024 - September 2024</i> <br/>
                    <ul>
                        <li>Implemented soft-core processor for 
                            product’s onboard FPGAs to improve 
                            customer firmware upload speed by 10x</li>
                        <li>Verified PCB layouts, debugged EEPROM 
                            functionality, and analyzed power 
                            consumption for team’s hardware</li>
                        <li>Automated the generation of 
                            simulation waveforms for testing of 
                            product’s FPGA signal processing 
                            algorithms</li>
                        <li>Wrote hardware SSI drivers for 
                            onboard chips to communicate between 
                            the product and test setup</li>
                    </ul>
                </p>
            </div>
        </div>

        <div className="flex-container" id="left">
            <div className="flex-child">
                <h3>Secure Systems and Architectures Lab @ UCLA</h3>
                <p> <b>Undergraduate Researcher</b> <br/>
                    <i>February 2024 - Present</i> <br/>
                    <ul>
                        <li>Analyzed security and performance 
                            implications of chipletization in modern 
                            systems under PI Nader Sehatbakhsh</li>
                        <li>Simulated chipletization of RISC-V core 
                            in gem5 and observed system performance 
                            with SPEC benchmarks</li>
                        <li>Modeled area and power consumption of SoCs</li>
                    </ul>
                </p>
            </div>
            <div className="flex-child">
                <img src={syssarch} alt="Syssarch" className="image"/>
            </div>
        </div>

        <div className="flex-container" id="right">
            <div className="flex-child">
                <img src={northrop} alt="NG" className="image"/>
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
                <h3>Laboratory for Embedded Machines & Ubiquitous Robots @ UCLA</h3>
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
            <div className="flex-child">
                <img src={edg} alt="Lab IDE" className="image"/>
            </div>
        </div>
    </div>
    );
}

export default Work