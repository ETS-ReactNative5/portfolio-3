import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import cciImage from '../../assets/ccidualview.png';
import relativepayImage from '../../assets/relativepaydualview.png';
import nebofitImage from '../../assets/nebofitdualview.png';

 
class Projects extends Component {
  constructor(){
    super();
 
    this.state = {
      projects: [
        {
            name: 'Cohort Competitive Intramurals',
            tech: 'React, Node, JavaScript ES6, PostgreSQL, HTML, CSS, Flexbox',
            description: 'Full stack website that tracks and ranks ping-pong and foosball players',
            image: cciImage,
            url: 'http://cohortci.com/'
        },
        {
            name: 'RelativePay',
            tech: 'React, Redux, Node, JavaScript (ES6), PostgreSQL, Express, Massive, Material UI, Chart.js,Flexbox, CSS Grid',
            description: 'Full stack website that compares salaries to Cost of Living across the country. Used mobile-first approach to create responsive designs for smartphones, tablets, and computers',
            image: relativepayImage,
            url: 'http://relativepay.com/'
        },
        {
          name: 'NeboFit',
          tech: 'React, Redux, Node, JavaScript (ES6), PostgreSQL, Express, Massive, Jest, Material UI, Semantic UI, Moment, Chart.js, RCProgress, Flexbox, CSS Grid, Fitbit API',
          description: 'Full stack website that helps track and display nutrition, hydration, steps, sleep, weight. Calculates and displays when a user is at their peak performance using a custom algorithm.',
          image: nebofitImage,
          url: 'https://github.com/NeboCreatives/nebofit'
        }
    ]
  }
}
  
  render() {
    let jsxProjectCards = this.state.projects.reverse().map( project => <ProjectCard project={project} key={project.name}/>);
    return (
      <div className="Projects">
        <div className="projects-container">
          <h1>Projects</h1>
          <div className='projects-line'></div>
          <div className='projects-container-bottom'>
            {jsxProjectCards}
          </div>
        </div>
      </div>
    );
  }
}
 
export default Projects;
