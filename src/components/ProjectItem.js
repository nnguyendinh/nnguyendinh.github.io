import React from "react";

function ProjectItem({image, name}) {
    return (
        <div className="projectItem">
            <img src={image} alt="Teaching" className="image"/>
            <div className="projectTitle"> {name} </div>
        </div>
    );
}

export default ProjectItem;