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
              Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.
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
