import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import pdfToolsData from '../../../Data/CardData.json';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (tool) => {
    // Navigate to the new route with the tool's function name as a parameter
    navigate(`/${tool.functionName}`);
  };

  return (
    <div className="herosection">
      <div className="hero-toptext">
        <h1 className="poppins-bold">Every tool you need to work with PDFs in one place</h1>
        <div className="para poppins-medium">
          <p>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</p>
        </div>
      </div>

      <div className="cards-container poppins-medium">
        {pdfToolsData.map((tool) => (
          <div key={tool.id} className="card" onClick={() => handleCardClick(tool)}>
            <img src={tool.img} alt={tool.functionName} className="card-image" />
            <h2 className="card-title">{tool.functionName}</h2>
            <p className="card-description">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
