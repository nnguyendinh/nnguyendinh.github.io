import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/ProjectsStyles.css";

import proj1 from "../images/proj1.jpg";
import banner from "../images/banner.png";
import logo from "../images/logo.png";
import OOP from "../images/OOP_crop.png";
import guitar from "../images/guitar_crop.png";
import dav from "../images/dav.png";
import dav1 from "../images/dav1_crop.png";
import mm from "../images/MM_crop.jpg";
import rt from "../images/realtime_crop.jpg"


function Projects() {
    return (
        <div className="projects">
        <h1 className="projectHeader"> Projects</h1>
            <div className="projectList">
                <ProjectItem image={mm} name="Micromouse" id="micromouse"/>
                <ProjectItem image={guitar} name="FPGA Guitar Hero" id="guitar-hero"/>
                <ProjectItem image={OOP} name="RISC-V Out of Order Processor" id="risc-v-processor"/>
                <ProjectItem image={dav1} name="Digital Audio Visualizer" id="digital-audio-visualizer"/>
                <ProjectItem image={banner} name="Bruin Bins" id="bruin-bins"/>
                <ProjectItem image={rt} name="Realtime Instrument Detector" id="instrument-detector"/>
            </div>
        </div>
    );
}

export default Projects;