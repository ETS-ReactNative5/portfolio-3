import React, { Component } from 'react';
import './Landing.css';
import reactIcon from '../../assets/react-icon-white.svg'

class Landing extends Component {
    constructor(props){
        super(props);

    }

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
                    <h5 className="landing-subtitle">Web Developer</h5>
                </div>
            </div>
            <div className="landing-vertical-line"></div>
            <div className="landing-links">
                <div className="landing-link landing-link-top" onClick={()=> this.props.scrollMethod('About', 1000)}><div>About</div></div>
                <div className="landing-link landing-link-top" onClick={()=> this.props.scrollMethod('Skills', 1500)}><div>Skills</div></div>
                <div className="landing-link landing-link-top" onClick={()=> this.props.scrollMethod('Projects', 2000)}><div>Projects</div></div>
                <div className="landing-link" onClick={()=> this.props.scrollMethod('Contact', 2500)}><div>Contact</div></div>
            </div>
        </div>
      </div>
    );
  }
}
 
export default Landing;
