import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import pdfToolsData from '../../../Data/CardData.json';
import './ToolDetails.css';

const ToolDetails = () => {
  const { functionName } = useParams(); // Retrieve the functionName from the URL params
  const fileInputRef = useRef(null); // Create a ref to access the file input

  // Find the tool by functionName
  const selectedTool = pdfToolsData.find((tool) => tool.functionName === functionName);

  if (!selectedTool) {
    return <div>Tool not found</div>;
  }

  const handleFileClick = () => {
    // Trigger the file input click when the "Select PDF file" div is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name); // You can handle the file (upload it, preview it, etc.)
    }
  };

  return (
    <div className="tool-detail">
      <h1 className='poppins-bold'>{selectedTool.functionName}</h1>
      <div className="tool-para">
        <p className='poppins-regular'>{selectedTool.description}</p>
      </div>
      <div className="select-pdf" onClick={handleFileClick}> {/* Trigger file input when clicked */}
        <p className='poppins-regular'>Select PDF file</p>
      </div>

      {/* Hidden file input to open file explorer */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="application/pdf" // Only allow PDF files
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ToolDetails;
