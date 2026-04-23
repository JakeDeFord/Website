import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./ResumePage.css"; 

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumePage() {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Calculate available width: window width - (2 * space-gutter 32px) - (2 * wrapper-padding 16px)
        const availableWidth = window.innerWidth - 96;
        const calculatedScale = availableWidth / 612; // 612px is standard US Letter width
        // Round down to the nearest 0.1 for clean zoom levels, min 0.4
        setScale(Math.max(0.4, Math.floor(calculatedScale * 10) / 10));
      } else {
        setScale(1.2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3.0));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.4));

  return (
    <div className="resume-page-container content-container">
      <div className="resume-header">
        <h2>EXPERIENCE</h2>
      </div>
      
      <div className="resume-viewer-container glass-panel">
        <div className="pdf-toolbar">
          <button onClick={zoomOut} className="pdf-btn" aria-label="Zoom Out" title="Zoom Out">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
          <span className="pdf-zoom-level">{Math.round(scale * 100)}%</span>
          <button onClick={zoomIn} className="pdf-btn" aria-label="Zoom In" title="Zoom In">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
          
          <div className="pdf-toolbar-divider"></div>
          
          <a href="/DeFord_Resume_2026_software-2.pdf" download className="pdf-btn" aria-label="Download PDF" title="Download PDF">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
        </div>
        
        <div className="pdf-document-wrapper">
          <Document
            file="/DeFord_Resume_2026_software-2.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="pdf-loading">Loading PDF...</div>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`}
                pageNumber={index + 1} 
                scale={scale} 
                className="pdf-page"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
