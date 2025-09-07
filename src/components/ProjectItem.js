import React from "react";
import { useNavigate } from 'react-router-dom';

function ProjectItem({image, name, id}) {
    return (
        <div className="projectItem" 
        onClick={() => {
            window.open("#/" + id, "_blank", "noopener,noreferrer");
        }}>
            <img src={image} alt="Teaching" className="image"/>
            <div className="projectTitle"> {name} </div>
        </div>
    );
}

export default ProjectItem;