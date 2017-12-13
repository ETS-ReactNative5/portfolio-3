import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import './Resume.css';
import resume from '../../assets/resume.pdf'

class Resume extends Component {
    render() {
      return (
        <div className='Resume'>
            <PDF
                file={resume}
            />
        </div>
        )
    }
}
 
export default Resume;