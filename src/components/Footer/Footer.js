import React, { Component } from 'react';
import './Footer.css';
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
                <LinkedinIcon 
                  size={35}
                  color={'white'}
                  onClick={()=> window.open("https://www.linkedin.com/in/hartman-william/", "_blank")}
                />
                <GithubIcon 
                  size={35}
                  color={'white'}
                  onClick={()=> window.open("https://github.com/WilliamHartman", "_blank")}                  
                />
                <EmailIcon 
                  size={35}
                  color={'white'}
                  onClick={()=> window.open("mailto:hartman.william@gmail.com", "_blank")}                  
                />
                <a href={resume} className='footer-resume'>
                  <ResumeIcon 
                    size={18}
                    color={'#143306'}
                    onClick={()=> window.open(resume)}                  
                  />
                </a>
            </div>
      </div>
    );
  }
}
 
export default Footer;