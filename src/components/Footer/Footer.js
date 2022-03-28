import React, { Component } from 'react';
import './Footer.css';
import Tooltip from '@mui/material/Tooltip';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';
import GithubIcon from 'react-icons/lib/fa/github-square';
import EmailIcon from 'react-icons/lib/fa/envelope-square';
import ResumeIcon from 'react-icons/lib/fa/file';
import resume from '../../assets/resume.pdf'


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="social-media">
          <Tooltip title="LinkedIn">
          <div className='footer-link'>
            <LinkedinIcon 
              size={35}
              color={'white'}
              onClick={()=> window.open("https://www.linkedin.com/in/hartman-william/", "_blank")}
            />
          </div>
          </Tooltip>
          <Tooltip title="Github">
          <div className='footer-link'>
            <GithubIcon 
              size={35}
              color={'white'}
              onClick={()=> window.open("https://github.com/WilliamHartman", "_blank")}                  
            />
            </div>
          </Tooltip>
          <Tooltip title="Email">
          <div className='footer-link'>
            <EmailIcon 
              size={35}
              color={'white'}
              onClick={()=> window.open("mailto:hartman.william@gmail.com", "_blank")}                  
            />
            </div>
          </Tooltip>
          <Tooltip title="Resume">
            <div className='footer-resume'>
              <ResumeIcon 
                size={19}
                color={'#143306'}
                onClick={()=> window.open(resume)}                  
              />
            </div>
          </Tooltip>
        </div>
      </div>
    );
  }
}
 
export default Footer;