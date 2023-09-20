import React from "react";
import { useNavigate } from 'react-router-dom';

function ProjectItem({image, name, id}) {
    const navigate = useNavigate();

    return (
        <div className="projectItem" 
        onClick={() => {
            navigate("/" + id);
        }}>
            <img src={image} alt="Teaching" className="image"/>
            <div className="projectTitle"> {name} </div>
        </div>
    );
}

export default ProjectItem;