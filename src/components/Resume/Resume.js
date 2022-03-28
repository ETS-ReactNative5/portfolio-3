import React, { useState } from 'react';
import './Resume.css';
import resume from '../../assets/resume.pdf'
import { Document, Page } from 'react-pdf';

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
    <div className='Resume'>
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
    </div>
    )
}
 
export default Resume;