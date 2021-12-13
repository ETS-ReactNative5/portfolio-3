import React, { Component } from 'react';
import './Skills.css';
import ReactTooltip from 'react-tooltip';
import reactIcon from '../../assets/react-icon.svg';
import nodejsIcon from '../../assets/nodejs-icon.svg';
import postgresqlIcon from '../../assets/postgresql-icon.svg';
import npmIcon from '../../assets/npm-icon.svg';
import gitIcon from '../../assets/giticon.png';
import chartjsIcon from '../../assets/chartjs-icon.svg';
import htmlIcon from '../../assets/html5-icon.svg';
import cssIcon from '../../assets/css3-icon.png';
import javascriptIcon from '../../assets/js_logo.png';
import jestIcon from '../../assets/jest.svg';
import cypressIcon from '../../assets/cypress-logo.png';
import azureIcon from '../../assets/azure-logo.png';
import mysqlIcon from '../../assets/mysql-logo.png';


class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="skill-container">
          <h1 className="skill-title">Skills</h1>
          <div className="skills-line"></div>
          <ul className="skill-icon-container">
              <li><span className='skill-icon-span'><img src={reactIcon} alt="react icon" className='skills-icon skills-react-icon' data-tip="React"/></span></li>
              <li><span className='skill-icon-span'><img src={nodejsIcon} alt="nodejs icon" className='skills-icon skills-nodejs-icon' data-tip="Node"/></span></li>
              <li><span className='skill-icon-span'><img src={gitIcon} alt="github icon" className='skills-icon skills-github-icon' data-tip="Git"/></span></li>                
              <li><span className='skill-icon-span'><img src={postgresqlIcon} alt="postgresql icon" className='skills-icon skills-postgresql-icon' data-tip="PostgreSQL"/></span></li>
              <li><span className='skill-icon-span'><img src={npmIcon} alt="npm icon" className='skills-icon skills-npm-icon' data-tip="Node"/></span></li>
              <li><span className='skill-icon-span'><img src={chartjsIcon} alt="chartjs icon" className='skills-icon skills-chartjs-icon' data-tip="ChartJS"/></span></li>
              <li><span className='skill-icon-span'><img src={jestIcon} alt="jest icon" className='skills-icon skills-jest-icon' data-tip="Jest"/></span></li>
              <li><span className='skill-icon-span'><img src={htmlIcon} alt="html icon" className='skills-icon skills-html-icon' data-tip="HTML"/></span></li>
              <li><span className='skill-icon-span'><img src={cssIcon} alt="css icon" className='skills-icon skills-css-icon' data-tip="CSS"/></span></li>
              <li><span className='skill-icon-span'><img src={javascriptIcon} alt="javascript icon" className='skills-icon skills-javascript-icon' data-tip="Javascript"/></span></li>
              <li><span className='skill-icon-span'><img src={cypressIcon} alt="javascript icon" className='skills-icon skills-cypress-icon' data-tip="cypress.io"/></span></li>
              <li><span className='skill-icon-span'><img src={azureIcon} alt="javascript icon" className='skills-icon skills-azure-icon' data-tip="azure"/></span></li>
              <li><span className='skill-icon-span'><img src={mysqlIcon} alt="javascript icon" className='skills-icon skills-mysql-icon' data-tip="mysql"/></span></li>
          </ul>
        </div>
        <ReactTooltip place="top" type="dark" effect="float"/>
      </div>
    );
  }
}
 
export default Skills;
