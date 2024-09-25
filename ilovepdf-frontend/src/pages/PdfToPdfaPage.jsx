import React, { useRef } from "react";
import { Button } from "../components/UI/button"; // Assuming Shadcn uses this path
import { Input } from "../components/UI/input";
import { FaDropbox, FaGoogleDrive } from "react-icons/fa";
import Header from "../components/UI/Header/Header";

const PdfToPdfaPdfComponent = () => {
  const fileInputRef = useRef(null); // Ref for file input

  // Handle Merge Button Click
  const handleMergeButton = async () => {
    const files = fileInputRef.current.files;

    if (files.length < 2) {
      alert("Please select at least two PDFs to merge");
      return;
    }

    const formData = new FormData();
    // Append all selected files to the formData object
    Array.from(files).forEach((file) => {
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

  return (
    <>
      
      <div className="flex flex-col space-y-4 items-center">
        {/* Input Box */}
        <div className="w-full max-w-md">
          <Input
            type="file"
            accept="application/pdf"
            multiple // Allow multiple file selection
            ref={fileInputRef} // Reference to the file input
            className="w-full h-16 text-lg p-4"
            placeholder="Select PDFs to Merge"
          />
        </div>

        {/* Button with Dropbox and Google Drive Icons */}
        <Button 
          variant='destructive'
          onClick={handleMergeButton}
          className="w-full max-w-md h-16  flex justify-between items-center"
        >
          <span className="text-lg">PDF to Pdf/A</span>
          <div className="flex space-x-2 items-center">
            {/* Dropbox Icon */}
            <FaDropbox size={24} />
            {/* Google Drive Icon */}
            <FaGoogleDrive size={24} />
          </div>
        </Button>
      </div>
    </>
  );
};

export default PdfToPdfaPdfComponent;
