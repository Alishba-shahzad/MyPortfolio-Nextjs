// Button.tsx
import React from 'react';

const DownloadCVButton = () => {
  const downloadCV = () => {
    const cvUrl = 'C.V Alishba Shehzad.pdf'; 
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = 'MY-CV.pdf'; 
    a.click();
  };

  return (
    <div>
      <button
        onClick={downloadCV}
        className=" bg-white text-orange-500 cursor-pointer border border-orange-500 hover:bg-orange-100 py-2 px-4 rounded"
      >
        Download CV
      </button>
    </div>
  );
};



export default DownloadCVButton;
