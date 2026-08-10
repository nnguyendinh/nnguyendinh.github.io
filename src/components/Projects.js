import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/ProjectsStyles.css";

import bins from "../images/bins.png";
import OOP from "../images/472_arch.png";
import guitar from "../images/guitar_crop.png";
import dav from "../images/dav_crop.png";
import micromouse from "../images/micromouse_crop.jpg";
import wrap from "../images/wrap_crop.png";
import edram from "../images/edram_crop.png";
import RCHuman from "../images/RCHuman_crop.png";
import adder from "../images/adder_crop.png";
import acc from "../images/accelerator.png"

function Projects() {
    return (
        <div className="projects">
        <h1 className="projectHeader"> Projects</h1>
            <div className="projectList">
                <ProjectItem image={OOP} name="Multithreaded Out of Order Processor" id="risc-v-processor"/>
                <ProjectItem image={wrap} name="Wireless Embedded Comms System" id="wrap"/>
                <ProjectItem image={acc} name="Transfomer Attention Hardware Accelerator" id="accelerator"/>
                <ProjectItem image={RCHuman} name="Remote Control Human" id="rc-human"/>
                <ProjectItem image={micromouse} name="Micromouse" id="micromouse"/>
                <ProjectItem image={dav} name="Digital Audio Visualizer" id="digital-audio-visualizer"/>
                <ProjectItem image={edram} name="Embedded DRAM Design Project" id="edram"/>
                <ProjectItem image={guitar} name="FPGA Guitar Hero" id="guitar-hero"/>
                <ProjectItem image={bins} name="Bruin Bins" id="bruin-bins"/>
            </div>
        </div>
    );
}

export default Projects;