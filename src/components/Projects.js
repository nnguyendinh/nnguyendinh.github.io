import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/ProjectsStyles.css";

import proj1 from "../images/proj1.jpg";

function Projects() {
    return (
        <div className="projects">
        <h1 className="projectHeader"> Projects</h1>
            <div className="projectList">
                <ProjectItem image={proj1} name="Micromouse"/>
                <ProjectItem image={proj1} name="Digital Audio Visualizer"/>
                <ProjectItem image={proj1} name="RISC-V Out of Order Processor"/>
                <ProjectItem image={proj1} name="Bruin Bins"/>
                <ProjectItem image={proj1} name="FPGA Guitar Hero"/>
                <ProjectItem image={proj1} name="Realtime Instrument Detector"/>
            </div>
        </div>
    );
}

export default Projects;