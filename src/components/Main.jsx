import React, { Component } from 'react'
import ProjectCard from './ProjectCard.jsx'

export default class Main extends Component {
  handleSubmitContact = (e) => {
    e.preventDefault()

  }

  render() {
    return (
      <div className="main">
        <div id='home'>
          <div id="opening" className='a-section'>
            <div className="section-paragraph">
              <h1>
                Hello! I am Jacky.
              </h1>
              <p>
                I am a software engineer with expertise in full-stack development and UX design. You can check out my work here!
              </p>
            </div>
            <div className="two-buttons">
              <a className="link-button" href='#se'>Software Engineer</a>
              <a className="link-button" href='#ux'>UX Design</a>
            </div>
          </div>
        </div>
        <div id="about" className='a-section'>
          <h3>
            About Me
          </h3>
          <div className="section-paragraph">
            <div>
              <p>
                As a lifelong learner, my passion in creative problem-solving derives from my hope of making better solutions for people to interact with the world around them.
            </p>
              <p>
                As a graduate from Carnegie Mellon and General Assembly, I am able to leverage my strong left-brain analytical skills and right-brain creative thinking to solve problems.
            </p>
            </div>

            <div className="two-buttons">
              <a target="_blank" href="https://www.linkedin.com/in/jackycyang/">
                <img className="link-img" src="https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595867748/linkedin_gks3wn.png" width="40px"></img>
              </a>
              <a target="_blank" href="https://github.com/jackyclyang">
                <img className="link-img" src="https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595867857/logo_cz3xjr.png" width="40px"></img>
              </a>

            </div>

          </div>
        </div>
        <div id="se" className='a-section'>
          <h3>Software Engineer Work</h3>
          <div className="map-cards">
            {seProjects.map(project => {
              return <ProjectCard project={project} />
            })}
          </div>
        </div>
        <div id="ux" className='a-section'>
          <h3>UX Design Work</h3>
          <div className="map-cards">
            {uxProjects.map(project => {
              return <ProjectCard project={project} />
            })}
          </div>
        </div>
        <div id="contact" className='a-section'>
          <h3>Contact Me</h3>
          <div className="section-paragraph">
            <p>
              Want to work together on something amazing?
            </p>
            <p>
              Shoot me a message and let's connect professionally!
            </p>
          </div>
          <a className="link-button" target="_blank" href="https://forms.gle/mzmvSwJEjrT1mKX19">Get in touch here</a>
        </div>
      </div >
    )
  }
}

const seProjects = [
  {
    type: "se",
    name: "Nighty Night",
    description: "A full-stack app that helps you declutter your mind before bedtime",
    img: "https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595848073/img_rktnqw.png",
    deploy: "http://nighty-night.surge.sh/",
    github: "https://github.com/jackyclyang/nighty_night"
  },
  {
    type: "se",
    name: "Good Cuisine",
    description: "A curated and categorized recipe website with RESTful API",
    img: "https://images.unsplash.com/photo-1506810487030-e7f94a5eef74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    deploy: "http://slow-potato.surge.sh/",
    github: "https://github.com/kcip/good-cuisine"
  },
  {
    type: "se",
    name: "Studio Ghibli",
    description: "A showcase of the film collection from Studio Ghibli",
    img: "https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595848253/img_ghibli_v9vasj.png",
    deploy: "https://studio-ghibli-collection.netlify.app/",
    github: "https://github.com/jackyclyang/studio-ghibli"
  },
  {
    type: "se",
    name: "Jeopardy",
    description: "The beloved game Jeopardy built with vanilla JS",
    img: "https://www.aiche.org/sites/default/files/chenected/2011/06/jeopardy.jpg",
    deploy: "https://jackyclyang.github.io/jeopardy/",
    github: "https://github.com/jackyclyang/jeopardy"
  }
]


const uxProjects = [
  {
    type: "ux",
    name: "ProDeal",
    description: "Award-winning document and workflow management software",
    img: "https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595849767/Screen_Shot_2020-07-27_at_7.35.46_AM_zvnqnc.png",
    deploy: "https://prodeal360.com/",
    github: ""
  },
  {
    type: "ux",
    name: "Seamless.Ai",
    description: "A leading SaaS for sales professionals to find leads",
    img: "https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595849453/22_cycbzm.jpg",
    deploy: "https://www.jackycyang.com/seamless-ai",
    github: ""
  },
  {
    type: "ux",
    name: "NYS Board of Elections",
    description: "UX case study for the government's website redesign",
    img: "https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595849365/website_mockup_copy_2_izvaze.jpg",
    deploy: "https://www.jackycyang.com/new-york-state-board-of-elections",
    github: ""
  },
  {
    type: "ux",
    name: "Lyft Social",
    description: "UX case study for a conceptual feature integration",
    img: "https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595849551/iPhone_copy_htn4va.jpg",
    deploy: "https://www.jackycyang.com/lyft-social",
    github: ""
  }
]