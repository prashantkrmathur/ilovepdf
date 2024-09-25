import React, { useRef, useState, useEffect } from "react";
import { Button } from "../components/UI/button";
import { Input } from "../components/UI/input";
import { FaDropbox, FaGoogleDrive, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import Header from "../components/UI/Header/Header";
import { Drawer } from "../components/UI/Drawer";
import * as pdfjsLib from "pdfjs-dist";

// Use the worker file from the official CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const MergePdfCard = () => {
  const fileInputRef = useRef(null); // Ref for file input
  const [pdfFiles, setPdfFiles] = useState([]); // Store selected PDF files
  const [pdfPreviews, setPdfPreviews] = useState({}); // Store PDF preview images

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPdfFiles([...pdfFiles, ...files]);
    files.forEach((file, index) => generatePdfPreview(file, index));
  };

  // Generate a preview of the first page of the PDF
  const generatePdfPreview = (file, index) => {
    const reader = new FileReader();
    reader.onload = async function (e) {
      const typedarray = new Uint8Array(e.target.result);
      const pdf = await pdfjsLib.getDocument(typedarray).promise;

      const page = await pdf.getPage(1); // Get the first page
      const viewport = page.getViewport({ scale: 1.5 }); // Adjust scale as needed

      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const context = canvas.getContext("2d");

      await page.render({ canvasContext: context, viewport }).promise;

      const previewImage = canvas.toDataURL(); // Convert the canvas to an image URL
      setPdfPreviews((prevState) => ({
        ...prevState,
        [file.name]: previewImage, // Use file name as key to store each preview
      }));
    };

    reader.readAsArrayBuffer(file);
  };

  // Handle removing PDF
  const removePdf = (index) => {
    const updatedFiles = [...pdfFiles];
    updatedFiles.splice(index, 1);
    setPdfFiles(updatedFiles);
  };

  // Handle rotate PDF (this can be extended to apply rotation logic)
  const rotatePdf = (index) => {
    console.log(`Rotate PDF at index: ${index}`);
  };

  // Handle Merge Button Click
  const handleMergeButton = async () => {
    if (pdfFiles.length < 2) {
      alert("Please select at least two PDFs to merge");
      return;
    }

    const formData = new FormData();
    pdfFiles.forEach((file) => {
      formData.append("pdfs", file);
    });

    try {
      const response = await fetch("http://localhost:3000/api/pdf/merge", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

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
      <Header />
      <div className="flex">
        <div className="flex flex-col space-y-4 items-center w-3/4">
          {/* Input Box */}
          <div className="w-full max-w-md">
            <Input
              type="file"
              accept="application/pdf"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="w-full h-16 text-lg p-4"
              placeholder="Select PDFs to Merge"
            />
          </div>

          {/* Preview Cards */}
          <div className="w-full max-w-md grid grid-cols-2 gap-4">
            {pdfFiles.map((file, index) => (
              <div
                key={index}
                className="relative group border shadow-lg p-2 rounded"
              >
                {/* PDF Thumbnail or Preview */}
                <div className="h-40 overflow-hidden">
                  {pdfPreviews[file.name] ? (
                    <img
                      src={pdfPreviews[file.name]}
                      alt={`PDF Preview ${index}`}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                      <span>Loading preview...</span>
                    </div>
                  )}
                </div>

                {/* Rotate & Delete Icons */}
                <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => rotatePdf(index)}>
                    <FaSyncAlt size={20} />
                  </button>
                  <button onClick={() => removePdf(index)}>
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer for Reordering */}
        <Drawer position="right" isOpen={true}>
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">Merge PDF</h2>
            <p>To change the order of your PDFs, drag and drop the files as you want.</p>

            {/* Merge Button */}
            <Button
              variant="destructive"
              onClick={handleMergeButton}
              className="w-full animate-pulse"
            >
              Merge PDFs
            </Button>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MergePdfCard;
