import React from 'react';
import MergePdfComponent from './MergePdfCard';

const PdfCardTools = () => {
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
      <MergePdfComponent/>
    </div>
  );
};

export default PdfCardTools;
