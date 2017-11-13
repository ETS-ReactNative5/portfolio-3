import React, { Component } from 'react';
import './Landing.css';
import reactIcon from '../../assets/react-icon-white.svg'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="landing-main">
            <div className="landing-circle">
                <img src={reactIcon} alt="" className="landing-react-icon"/>
            </div>
            <div className="landing-vertical-line"></div>
            <div className="landing-title-section">
                <div className='landing-name-container'>
                    <h1 className="landing-name">William Hartman</h1>
                    <h5 className="landing-subtitle">Software Engineer</h5>
                </div>
            </div>
            <div className="landing-vertical-line"></div>
            <div className="landing-links">
                <div className="landing-link landing-link-top"><div>About</div></div>
                <div className="landing-link landing-link-top"><div>Skills</div></div>
                <div className="landing-link landing-link-top"><div>Projects</div></div>
                <div className="landing-link"><div>Contact</div></div>
            </div>
        </div>
      </div>
    );
  }
}
 
export default Landing;
