import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/ProjectsStyles.css";

import bins from "../images/bins.png";
import OOP from "../images/OOP_crop.png";
import guitar from "../images/guitar_crop.png";
import dav from "../images/dav_crop.png";
import micromouse from "../images/micromouse_crop.jpg";
import wrap from "../images/wrap_crop.png";
import edram from "../images/edram_crop.png";
import RCHuman from "../images/RCHuman_crop.png";
import adder from "../images/adder_crop.png";

function Projects() {
    return (
        <div className="projects">
        <h1 className="projectHeader"> Projects</h1>
            <div className="projectList">
                <ProjectItem image={wrap} name="Wireless Embedded Comms System" id="wrap"/>
                <ProjectItem image={micromouse} name="Micromouse" id="micromouse"/>
                <ProjectItem image={edram} name="Embedded DRAM Design Project" id="edram"/>
                <ProjectItem image={RCHuman} name="Remote Control Human" id="rc-human"/>
                <ProjectItem image={adder} name="16-bit Adder Layout" id="adder"/>
                <ProjectItem image={dav} name="Digital Audio Visualizer" id="digital-audio-visualizer"/>
                <ProjectItem image={OOP} name="RISC-V Out of Order Processor" id="risc-v-processor"/>
                <ProjectItem image={guitar} name="FPGA Guitar Hero" id="guitar-hero"/>
                <ProjectItem image={bins} name="Bruin Bins" id="bruin-bins"/>
            </div>
        </div>
    );
}

export default Projects;