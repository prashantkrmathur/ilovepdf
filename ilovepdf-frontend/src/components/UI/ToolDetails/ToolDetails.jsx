import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import pdfToolsData from '../../../Data/CardData.json';
import './ToolDetails.css';

const ToolDetails = () => {
  const { functionName } = useParams(); // Retrieve the functionName from the URL params
  const fileInputRef = useRef(null); // Create a ref to access the file input
  const [selectedFile, setSelectedFile] = useState(null); // To hold the selected file

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
    const files = event.target.files;
    if (files.length > 0) {
      setSelectedFile(files); // Set the selected files to state
      console.log("Selected files:", Array.from(files).map((file) => file.name));
    }
  };

  const handleMergeButton = async () => {
    if (!selectedFile || selectedFile.length < 2) {
      alert("Please select at least two PDFs to merge");
      return;
    }

    const formData = new FormData();
    // Append all selected files to the formData object
    Array.from(selectedFile).forEach((file) => {
      formData.append("pdfs", file);
    });

    try {
      // Make the POST request to the backend API
      const response = await fetch("http://localhost:3000/api/pdf/merge", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Assuming the response is a merged PDF
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Create a temporary link element to download the file
        const a = document.createElement("a");
        a.href = url;
        a.download = "merged.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        alert("Failed to merge PDFs");
      }
    } catch (error) {
      console.error("Error merging PDFs:", error);
      alert("An error occurred while merging PDFs");
    }
  };

  const handleAction = () => {
    if (!selectedFile) {
      alert("Please select a PDF file first.");
      return;
    }

    // Perform the action based on the tool's function name
    switch (functionName) {
      case 'merge':
        handleMergeButton();
        break;
      case 'split':
        console.log("Splitting the PDF...");
        // Add logic to split PDFs
        break;
      case 'compress':
        console.log("Compressing the PDF...");
        // Add logic to compress PDFs
        break;
      case 'rotate':
        console.log("Rotating the PDF...");
        // Add logic to rotate PDFs
        break;
      // Add more cases for other tools as needed
      default:
        console.log("Unknown tool function");
        break;
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
        accept="application/pdf"
        multiple={functionName === 'merge'} // Enable multiple file selection for merge
        onChange={handleFileChange}
      />

      {/* Button to perform the tool's action (e.g., merge, split) */}
      <button className="action-button" onClick={handleAction}>
        {`Perform ${selectedTool.functionName}`}
      </button>
    </div>
  );
};

export default ToolDetails;
