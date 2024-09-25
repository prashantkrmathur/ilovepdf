import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../card';
import { FaFilePdf } from 'react-icons/fa';  // Import PDF icon
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate("/merge-pdf")
  const handlePdfMergeButton= async(event)=>{
    event.preventDefault();
    navigate('/merge-pdf')
  }
  const handlePdfSplitButton= async(event)=>{
    event.preventDefault();
    navigate('/split-pdf')
  }
  const handlePdfCompressButton= async(event)=>{
    event.preventDefault();
    navigate('/compress-pdf')
  }
  const handlePdfCompareButton= async(event)=>{
    event.preventDefault();
    navigate('/compare-pdf')
  }
  const handlePdfEditPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/edit-pdf')
  }
  const handlePdfExcelToPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/excel-to-pdf')
  }
  const handlePdfHtmlToPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/html-to-pdf')
  }
  const handlePdfJpgToPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/jpg-to-pdf')
  }
  const handlePdfOcrPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/ocr-pdf')
  }
  const handlePdfOragnizePdfButton= async(event)=>{
    event.preventDefault();
    navigate('/organize-pdf')
  }
  const handlePdfPageNumbersButton= async(event)=>{
    event.preventDefault();
    navigate('/page-numbers')
  }
  const handlePdfToExcelButton= async(event)=>{
    event.preventDefault();
    navigate('/pdf-to-excel')
  }
  const handlePdfToJpgButton= async(event)=>{
    event.preventDefault();
    navigate('/pdf-to-jpg')
  }
  // const handlePdfToJpgButton= async(event)=>{
  //   event.preventDefault();
  //   navigate('/compress-pdf')
  // }
  const handlePdfToPdfaButton= async(event)=>{
    event.preventDefault();
    navigate('/pdf-to-pdfa')
  }
  const handlePdfToPowerpointButton= async(event)=>{
    event.preventDefault();
    navigate('/pdf-to-powerpoint')
  }
  const handlePdfToWordButton= async(event)=>{
    event.preventDefault();
    navigate('/pdf-to-word')
  }
  const handlePdfPowerpointToPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/powerpoint-to-pdf')
  }
  const handlePdfProtectPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/protect-pdf')
  }
  const handlePdfRedactPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/redact-pdf')
  }
  const handlePdfRepairPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/repair-pdf')
  }
  const handlePdfRotatePdfButton= async(event)=>{
    event.preventDefault();
    navigate('/rotate-pdf')
  }
  const handlePdfSignPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/sign-pdf')
  }
  const handlePdfScanToPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/scan-to-pdf')
  }
  const handlePdfUnlockPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/unlock-pdf')
  }
  const handlePdfWatermarkButton= async(event)=>{
    event.preventDefault();
    navigate('/watermark')
  }
  const handlePdfWordToPdfButton= async(event)=>{
    event.preventDefault();
    navigate('/word-to-pdf')
  }
  
  return (
    <div className="herosection py-8 bg-gray-50">
      {/* Hero Text */}
      <div className="hero-toptext text-center">
        <h1 className='text-3xl font-bold leading-tight'>Every tool you need to work with PDFs in one place</h1>
        <div className="para mt-4 mx-auto w-full md:w-2/3">
          <p className="text-lg text-gray-600">Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="all-cards-container flex justify-center flex-wrap gap-2">
      <div className="cards-container flex justify-center gap-6  ">
          <Card  className="w-64" onClick={handlePdfMergeButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Merge Pdf</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfSplitButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Split Pdf</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfCompressButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Compress Pdf</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfToWordButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">PDF to Word</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfToPowerpointButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">PDF to PowerPoint</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfToExcelButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">PDF to Excel</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfWordToPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Word to PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfPowerpointToPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">PowerPoint to Pdf</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfExcelToPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Excel to PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfEditPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Edit PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfToJpgButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">PDF to JPG</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfJpgToPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">JPG to PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfSignPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Sign PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfWatermarkButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Watermark</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfRotatePdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Rotate PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfHtmlToPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">HTML to Pdf</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfUnlockPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Unlock PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfProtectPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Protect PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfOragnizePdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Oraganize PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfToPdfaButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">PDF to PDF/A</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfRepairPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Repair PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfPageNumbersButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Page Numbers</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfScanToPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Scan PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfOcrPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">OCR PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfCompareButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Compare PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
      <div className="cards-container flex justify-center flex-wrap gap-6  ">
          <Card  className="w-64" onClick={handlePdfRedactPdfButton}>
            <CardHeader className="flex justify-center">
                <FaFilePdf size={48} className="text-red-500" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium">Redact PDF</CardTitle>
              <CardDescription className="text-sm text-gray-500 mt-2">Combine PDFs in the order you want with the easiest PDF merger available</CardDescription>
            </CardContent>
          </Card>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
