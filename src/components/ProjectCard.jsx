import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="project-card">

      <img src={props.project.img} className="card-img" />
      <div className="project-name">
        {props.project.name}
      </div>
      <div className="project-description">
        {props.project.description}
      </div>
      {props.project.type === "se" ?
        <div className="two-buttons">
          <a className="link-button" target="_blank" href={props.project.deploy}>App</a>
          <a className="link-button" target="_blank" href={props.project.github}>GitHub</a>
        </div> :
        <div className="two-buttons">
          <a className="link-button" target="_blank" href={props.project.deploy}>View</a>
        </div>}


    </div>
  )
}
