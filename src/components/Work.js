import React from "react";
import "../styles/WorkStyles.css";

import northrop from "../images/ng-beige.png";
import edg from "../images/edg.png";
import keysight from "../images/keysight-beige.png";
import syssarch from "../images/syssarch-beige.png";
import microsoft from "../images/microsoft.png";

function Work () {

    return (
    <div className="work"> 
        <h2> Work Experience</h2>
        
        <div className="flex-container" id="left">
            <div className="flex-child">
                <h3>Microsoft</h3>
                <p> <b>Software for Hardware Engineering Intern</b> <br/>
                    <i>May 2025 - August 2025</i> <br/>
                    <ul>
                        <li>Redesigned internal Windows crash dump analysis tools 
                            to optimize compute utilization and processing time</li>
                        <li>Utilized MCP to create debugger-enabled LLM agent 
                            capable of analyzing system hardware and diagnosing crashes</li>
                        <li>Implemented dynamic locking algorithms throughout the tooling 
                            codebase to enable multi-threaded execution</li>
                        <li>Achieved 10x speedup for crash dump analysis times through 
                            agentic automation and computational optimizations</li>
                    </ul>
                </p>
            </div>
            <div className="flex-child">
                <img src={microsoft} alt="Microsoft" className="image"/>
            </div>
        </div>
        <div className="flex-container" id="right">
            <div className="flex-child">
                <img src={keysight} alt="Keysight" className="image"/>
            </div>
            <div className="flex-child">
                <h3>Keysight Technologies</h3>
                <p> <b>R&D Hardware Engineering Intern</b> <br/>
                    <i>June 2024 - September 2024</i> <br/>
                    <ul>
                        <li>Developed embedded Linux firmware for advanced flash 
                            memory management, including secure multi-image boot, 
                            memory protection, and robust read and write operations 
                            to ensure system reliability for end-user products</li>
                        <li>Improved NAND flashing speed by 600% for onboard FPGAs 
                            through custom soft-core processor solution</li>
                        <li>Reviewed PCB layouts, verified system functionality, 
                            and analyzed power consumption of market-level hardware</li>
                        <li>Automated generation of SystemC simulation waveforms 
                            for testing of FPGA signal processing algorithms</li>
                    </ul>
                </p>
            </div>
        </div>

        <div className="flex-container" id="left">
            <div className="flex-child">
                <h3>Secure Systems and Architectures Lab @ UCLA</h3>
                <p> <b>Undergraduate Researcher</b> <br/>
                    <i>February 2024 - March 2025</i> <br/>
                    <ul>
                        <li>Analyzed security and performance 
                            implications of chipletization in modern 
                            systems under PI Nader Sehatbakhsh</li>
                        <li>Simulated chipletization of RISC-V cores 
                            in gem5 and observed system performance 
                            with SPEC benchmarks</li>
                        <li>Compared accuracy of gem5 simulator and 
                            STM32 microcontrollers running EEMBC’s 
                            CoreMark benchmark</li>
                        <li>Automated parsing of verilog files to 
                            extract module information and construct 
                            architecture graphs</li>
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
                        <li>Wrote 10+ Matlab scripts to assist RF engineers 
                            in efficiently plotting and verifying test data 
                            with unit specs</li>
                        <li>Created documentation for interfaces and design 
                            of internal communications channel decoders for 
                            FPGA designs</li>
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