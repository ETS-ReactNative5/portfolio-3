import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props){
    return(
        <div className="ProjectCard">
            <div className="projectcard-title">
                <h3>{props.project.name}</h3>
            </div>
            <img src={props.project.image} alt={props.project.name} className='projectcard-image'/>            
            <div className="projectcard-bottom">
                <div className="projectcard-info">
                    <div className="projectcard-tech"><b>Tech: </b>{props.project.tech}</div>
                    <div className="projectcard-description"><b>Description: </b>{props.project.description}</div>
                </div>
            </div>
        </div>
    )
}