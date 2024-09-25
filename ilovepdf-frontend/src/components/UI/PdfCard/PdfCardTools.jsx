import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../card';
import {
  FaFilePdf, FaCompress, FaFileWord, FaFilePowerpoint, FaFileExcel, FaFileSignature, FaWater, FaLock, FaUnlockAlt,
  FaFileAlt, FaSearch, FaSyncAlt, FaRegFilePdf, FaToolbox, FaFileArchive, FaTrashAlt, FaFileMedical, FaSitemap, 
  FaPrint, FaFileUpload, FaExchangeAlt, FaPage4
} from 'react-icons/fa'; // Replaced FaScanner with FaPrint
import { useNavigate } from 'react-router-dom';

const PdfCardTool = () => {
  const navigate = useNavigate();

  // Icon mapping based on card title
  const iconMap = {
    'Merge PDF': FaFilePdf,
    'Split PDF': FaFilePdf,
    'Compress PDF': FaCompress,
    'PDF to Word': FaFileWord,
    'PDF to PowerPoint': FaFilePowerpoint,
    'PDF to Excel': FaFileExcel,
    'Word to PDF': FaFilePdf,
    'PowerPoint to PDF': FaFilePowerpoint,
    'Excel to PDF': FaFileExcel,
    'Edit PDF': FaFileAlt,
    'PDF to JPG': FaFileAlt,
    'JPG to PDF': FaFileAlt,
    'Sign PDF': FaFileSignature,
    'Watermark': FaWater,
    'Rotate PDF': FaSyncAlt,
    'HTML to PDF': FaFilePdf,
    'Unlock PDF': FaUnlockAlt,
    'Protect PDF': FaLock,
    'Organize PDF': FaSitemap,
    'PDF to PDF/A': FaFileArchive,
    'Repair PDF': FaFileMedical,
    'Page Numbers': FaPage4,
    'Scan to PDF': FaPrint, // Replaced FaScanner with FaPrint
    'OCR PDF': FaSearch,
    'Compare PDF': FaExchangeAlt, // Replaced with FaExchangeAlt
  };

  // Combined handler function for navigation
  const handleNavigate = (path) => (event) => {
    event.preventDefault();
    navigate(path);
  };

  const cards = [
    { title: 'Merge PDF', description: 'Combine PDFs in the order you want.', path: '/merge-pdf' },
    { title: 'Split PDF', description: 'Easily split a large PDF into separate files.', path: '/split-pdf' },
    { title: 'Compress PDF', description: 'Reduce the file size of your PDFs.', path: '/compress-pdf' },
    { title: 'PDF to Word', description: 'Convert PDFs into editable Word files.', path: '/pdf-to-word' },
    { title: 'PDF to PowerPoint', description: 'Transform PDFs into PowerPoint presentations.', path: '/pdf-to-powerpoint' },
    { title: 'PDF to Excel', description: 'Export PDFs to Excel spreadsheets.', path: '/pdf-to-excel' },
    { title: 'Word to PDF', description: 'Convert Word documents to PDF format.', path: '/word-to-pdf' },
    { title: 'PowerPoint to PDF', description: 'Convert PowerPoint presentations into PDF.', path: '/powerpoint-to-pdf' },
    { title: 'Excel to PDF', description: 'Export Excel files to PDF.', path: '/excel-to-pdf' },
    { title: 'Edit PDF', description: 'Modify PDF content without converting.', path: '/edit-pdf' },
    { title: 'PDF to JPG', description: 'Convert PDFs into high-quality images.', path: '/pdf-to-jpg' },
    { title: 'JPG to PDF', description: 'Combine or convert images into PDFs.', path: '/jpg-to-pdf' },
    { title: 'Sign PDF', description: 'Add your signature to PDFs.', path: '/sign-pdf' },
    { title: 'Watermark', description: 'Add custom watermarks to your PDFs.', path: '/watermark' },
    { title: 'Rotate PDF', description: 'Rotate pages in your PDF files.', path: '/rotate-pdf' },
    { title: 'HTML to PDF', description: 'Convert HTML pages to PDF.', path: '/html-to-pdf' },
    { title: 'Unlock PDF', description: 'Remove passwords from PDFs.', path: '/unlock-pdf' },
    { title: 'Protect PDF', description: 'Encrypt and protect your PDF documents.', path: '/protect-pdf' },
    { title: 'Organize PDF', description: 'Rearrange, delete or rotate PDF pages.', path: '/organize-pdf' },
    { title: 'PDF to PDF/A', description: 'Convert PDF to archive-friendly format.', path: '/pdf-to-pdfa' },
    { title: 'Repair PDF', description: 'Fix corrupted or damaged PDF files.', path: '/repair-pdf' },
    { title: 'Page Numbers', description: 'Add or manage page numbers in PDFs.', path: '/page-numbers' },
    { title: 'Scan to PDF', description: 'Convert scanned documents to PDF.', path: '/scan-to-pdf' },
    { title: 'OCR PDF', description: 'Use OCR to make PDFs searchable.', path: '/ocr-pdf' },
    { title: 'Compare PDF', description: 'Compare two PDF documents side by side.', path: '/compare-pdf' },
  ];

  return (
    <div className="PdfCardTool py-8 bg-gray-50">
      {/* Hero Text */}
      <div className="hero-toptext text-center">
        <h1 className='text-3xl font-bold leading-tight mx-2'>Every tool you need to work with PDFs in one place</h1>
        <div className="para mt-4 mx-auto w-full md:w-2/3">
          <p className="text-lg text-gray-600 mx-2">All tools are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock, and watermark PDFs with just a few clicks.</p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="all-cards-container flex justify-center flex-wrap gap-6">
        {cards.map((card, index) => {
          const Icon = iconMap[card.title] || FaFilePdf; // Default to FaFilePdf if no match found
          return (
            <div className="cards-container flex justify-center flex-wrap gap-6" key={index}>
              <Card className="w-64" onClick={handleNavigate(card.path)}>
                <CardHeader className="flex justify-center">
                  <Icon size={48} className="text-red-500" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mt-2">{card.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PdfCardTool;
