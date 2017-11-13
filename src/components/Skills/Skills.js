import React, { Component } from 'react';
import './Skills.css';
import reactIcon from '../../assets/react-icon.svg';
import nodejsIcon from '../../assets/nodejs-icon.svg';
import postgresqlIcon from '../../assets/postgresql-icon.svg';
import npmIcon from '../../assets/npm-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import chartjsIcon from '../../assets/chartjs-icon.svg';
import angularIcon from '../../assets/angular-icon.svg';
import htmlIcon from '../../assets/html5-icon.svg';
import cssIcon from '../../assets/css3-icon.png';
import javascriptIcon from '../../assets/es6-icon.svg';


class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="skill-container">
          <h1 className="skill-title">Skills</h1>
          <div className="skills-line"></div>
          <ul className="skill-icon-container">
              <li><span className='skill-icon-span'><img src={reactIcon} alt="react icon" className='skills-icon skills-react-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={nodejsIcon} alt="nodejs icon" className='skills-icon skills-nodejs-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={githubIcon} alt="github icon" className='skills-icon skills-github-icon'/></span></li>                
              <li><span className='skill-icon-span'><img src={postgresqlIcon} alt="postgresql icon" className='skills-icon skills-postgresql-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={npmIcon} alt="npm icon" className='skills-icon skills-npm-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={chartjsIcon} alt="chartjs icon" className='skills-icon skills-chartjs-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={angularIcon} alt="angular icon" className='skills-icon skills-angular-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={htmlIcon} alt="html icon" className='skills-icon skills-html-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={cssIcon} alt="css icon" className='skills-icon skills-css-icon'/></span></li>
              <li><span className='skill-icon-span'><img src={javascriptIcon} alt="javascript icon" className='skills-icon skills-javascript-icon'/></span></li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Skills;
