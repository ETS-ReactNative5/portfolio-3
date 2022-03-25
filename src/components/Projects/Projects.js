import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import cciImage from '../../assets/ccidualview.png';
import relativepayImage from '../../assets/relativepaydualview.png';
import nebofitImage from '../../assets/nebofitdualview.png';
import s3Image from '../../assets/S3_center.gif';
import bjjImage from '../../assets/bjjcurrdualview.png'

 
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
            url: 'https://github.com/WilliamHartman/CCI'
        },
        {
            name: 'RelativePay',
            tech: 'React, Redux, Node, JavaScript, PostgreSQL, Express, Massive, Material UI, Chart.js,Flexbox, CSS Grid',
            description: 'Full stack website that compares salaries to Cost of Living across the country. Used mobile-first approach to create responsive designs for smartphones, tablets, and computers',
            image: relativepayImage,
            url: 'https://github.com/WilliamHartman/relativepay'
        },
        {
          name: 'NeboFit',
          tech: 'React, Redux, Node, JavaScript, PostgreSQL, Express, Massive, Jest, Material UI, Semantic UI, Moment, Chart.js, RCProgress, Flexbox, CSS Grid, Fitbit API',
          description: 'Full stack website that helps track and display nutrition, hydration, steps, sleep, weight. Calculates and displays when a user is at their peak performance using a custom algorithm.',
          image: nebofitImage,
          url: 'https://github.com/NeboCreatives/nebofit'
        },
        {
          name: 'S3',
          tech: 'React, Redux, Node, JavaScript, PostgreSQL, Express, Cron, GroupMe, Massive, Cypress, Material UI, Moment, Flexbox',
          description: 'Full stack website that allows for easy sign up to the pickup games for Dartmouth Tuck soccer club and post the sign up player list to the GroupMe message group via a bot. The app will create 2 or 4 randomized teams based on number of players and clear itself after the game is over.',
          image: s3Image,
          url: 'https://github.com/WilliamHartman/s3'
        },
        {
          name: 'BJJ Curriculum',
          tech: 'React, Node, JavaScript, PostgreSQL, Auth0, Express, Massive, MUI, MUI DateGrid, Flexbox',
          description: 'Full stack website tracks a students progress in techniques required to be promoted to blue belt from white belt in Brazillian Jiu-Jitsu. Instructors can view their students progress through the app to learn what techniques each student knows so they can prepare lessons and drills for class.',
          image: bjjImage,
          url: 'https://github.com/WilliamHartman/bjjcurriculum'
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
