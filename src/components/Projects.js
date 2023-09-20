import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/ProjectsStyles.css";

import proj1 from "../images/proj1.jpg";

function Projects() {
    return (
        <div className="projects">
        <h1 className="projectHeader"> Projects</h1>
            <div className="projectList">
                <ProjectItem image={proj1} name="Micromouse" id="micromouse"/>
                <ProjectItem image={proj1} name="Digital Audio Visualizer" id="DAV"/>
                <ProjectItem image={proj1} name="RISC-V Out of Order Processor" id="D"/>
                <ProjectItem image={proj1} name="Bruin Bins" id="S"/>
                <ProjectItem image={proj1} name="FPGA Guitar Hero" id="A"/>
                <ProjectItem image={proj1} name="Realtime Instrument Detector" id="W"/>
            </div>
        </div>
    );
}

export default Projects;