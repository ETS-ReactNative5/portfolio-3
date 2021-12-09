import React, { Component } from 'react';
import './About.css';
import aboutPic from '../../assets/kinkokuji.jpg';


class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="about-container">
          <div className="about-top">
            <h1>About Me</h1>
            <div className='about-line'></div>
            <p>
              After half a decade of computer maintenence and repair work, I decided to jump back into my high school passion of programming. In September of 2017 I attended DevMountain where I learned full stack web development.
      
              My first full time web development position was with Microsoft where I worked for the Insiders team. My position was a mix of support and feedback gathering from the users, and web development of building a tool to help aggregate that data.
      
              After finishing my contract with Microsoft I was hired by Lifecenter NorthWest to be their first DevOps Engineer. I work closely with the staff to build full stack web apps where I am in control of the entire process, from conception to deployment.
            </p>
          </div>
          <div className="about-picture">
            <img src={aboutPic} alt="about"/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;
