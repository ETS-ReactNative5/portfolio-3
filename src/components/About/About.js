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
