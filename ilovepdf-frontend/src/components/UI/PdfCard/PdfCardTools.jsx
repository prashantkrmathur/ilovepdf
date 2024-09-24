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
      <div className="cards-container flex justify-center flex-wrap gap-6 mt-8">
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
    </div>
  );
};

export default HeroSection;
