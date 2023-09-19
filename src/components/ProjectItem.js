import React from "react";
// import "./ProjectItem.css";

function ProjectItem({image, name}) {
    return (
        <div className="project-item">
            <img src={image} alt={name} />
            <h1>{name}</h1>
        </div>
    );
}

export default ProjectItem;