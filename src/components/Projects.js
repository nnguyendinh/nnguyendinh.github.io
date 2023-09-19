import React from "react";
import ProjectItem from "./ProjectItem";
// import "../styles/ProjectsStyles.css";

import Teaching from "../images/teaching.jpg";

function Projects() {
    return (
        <div className="projects">
        <h1>Projects</h1>
            <div className="projects-list">
                <ProjectItem image={Teaching} name="Project 1"/>
                <ProjectItem image={Teaching} name="Project 2"/>
                <ProjectItem image={Teaching} name="Project 3"/>
                <ProjectItem image={Teaching} name="Project 4"/>
                <ProjectItem image={Teaching} name="Project 5"/>
                <ProjectItem image={Teaching} name="Project 6"/>
            </div>
        </div>
    );
}

export default Projects;