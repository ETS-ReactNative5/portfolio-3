import React, { Component } from 'react';
import './Footer.css';
import GoogleIcon from 'react-icons/lib/fa/google-plus-square';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';
import GithubIcon from 'react-icons/lib/fa/github-square';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="social-media">
                <GoogleIcon 
                    size={35}
                    color={'white'}
                />
                <LinkedinIcon 
                    size={35}
                    color={'white'}
                />
                <GithubIcon 
                    size={35}
                    color={'white'}
                />
            </div>
      </div>
    );
  }
}
 
export default Footer;
