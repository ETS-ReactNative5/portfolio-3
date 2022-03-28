import React, { Component } from 'react';
import './Skills.css';
import Tooltip from '@mui/material/Tooltip';
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
import muiIcon from '../../assets/muilogo.png';


class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="skill-container">
          <h1 className="skill-title">Skills</h1>
          <div className="skills-line"></div>
          <ul className="skill-icon-container">
              <li><span className='skill-icon-span'><Tooltip title="NodeJS"><img src={nodejsIcon} alt="nodejs icon" className='skills-icon skills-nodejs-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="ReactJS"><img src={reactIcon} alt="react icon" className='skills-icon skills-react-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="Git"><img src={gitIcon} alt="github icon" className='skills-icon skills-github-icon' /></Tooltip></span></li>                
              <li><span className='skill-icon-span'><Tooltip title="PostgreSQL"><img src={postgresqlIcon} alt="postgresql icon" className='skills-icon skills-postgresql-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="NPM"><img src={npmIcon} alt="npm icon" className='skills-icon skills-npm-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="ChartJS"><img src={chartjsIcon} alt="chartjs icon" className='skills-icon skills-chartjs-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="Jest"><img src={jestIcon} alt="jest icon" className='skills-icon skills-jest-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="HTML"><img src={htmlIcon} alt="html icon" className='skills-icon skills-html-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="CSS"><img src={cssIcon} alt="css icon" className='skills-icon skills-css-icon'/></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="JavaScript"><img src={javascriptIcon} alt="javascript icon" className='skills-icon skills-javascript-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="Cypress.io"><img src={cypressIcon} alt="cypress icon" className='skills-icon skills-cypress-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="Azure"><img src={azureIcon} alt="azure icon" className='skills-icon skills-azure-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="MySQL"><img src={mysqlIcon} alt="mysql icon" className='skills-icon skills-mysql-icon' /></Tooltip></span></li>
              <li><span className='skill-icon-span'><Tooltip title="MUI"><img src={muiIcon} alt="mui icon" className='skills-icon skills-mysql-icon' /></Tooltip></span></li>
          </ul>
        </div>
        <ReactTooltip place="top" type="dark" effect="float"/>
      </div>
    );
  }
}
 
export default Skills;
