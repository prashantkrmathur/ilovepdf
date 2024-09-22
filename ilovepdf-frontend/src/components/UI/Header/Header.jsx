import React, { useState } from 'react';
import './Header.css';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa'; // Import the profile icon
import { Link, useNavigate } from 'react-router-dom';
import '../../../../src/index.css'
const Header = () => {
  const [showConvertMenu, setShowConvertMenu] = useState(false);
  const [showAllToolsMenu, setShowAllToolsMenu] = useState(false);
  const navigate = useNavigate();

  const handleConvertMouseEnter = () => setShowConvertMenu(true);
  const handleConvertMouseLeave = () => setShowConvertMenu(false);

  const handleAllToolsMouseEnter = () => setShowAllToolsMenu(true);
  const handleAllToolsMouseLeave = () => setShowAllToolsMenu(false);
 const handleProfileClick = () => {
    navigate('/signup'); // Redirect to the login page
  };
  return (
    <header>
      <nav className='poppins-regular'>
        <div className="logo">
          <Link to='/'>
            <img src='https://www.ilovepdf.com/img/ilovepdf.svg' alt="iLovePDF Logo" />
          </Link>
        </div>

        <div className="pdf-tools-container">
          <ul className="main-menu">
            <li>Merge PDF</li>
            <li>Split PDF</li>
            <li>Compress PDF</li>

            {/* Convert PDF menu with dropdown */}
            <li
              onMouseEnter={handleConvertMouseEnter}
              onMouseLeave={handleConvertMouseLeave}
              className={`dropdown-item ${showConvertMenu ? 'active' : ''}`}
            >
              Convert PDF <FaChevronDown className="dropdown-icon" />
              {showConvertMenu && (
                <div className="convert-dropdown">
                  <div className="convert-section">
                    <strong>Convert to PDF</strong>
                    <ul>
                      <li>JPG to PDF</li>
                      <li>WORD to PDF</li>
                      <li>POWERPOINT to PDF</li>
                      <li>EXCEL to PDF</li>
                      <li>HTML to PDF</li>
                    </ul>
                  </div>
                  <div className="convert-section">
                    <strong>Convert from PDF</strong>
                    <ul>
                      <li>PDF to JPG</li>
                      <li>PDF to WORD</li>
                      <li>PDF to POWERPOINT</li>
                      <li>PDF to EXCEL</li>
                      <li>PDF to PDF/A</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* All PDF Tools menu with dropdown */}
            <li
              onMouseEnter={handleAllToolsMouseEnter}
              onMouseLeave={handleAllToolsMouseLeave}
              className={`dropdown-item ${showAllToolsMenu ? 'active' : ''}`}
            >
              All PDF Tools <FaChevronDown className="dropdown-icon" />
            
          {showAllToolsMenu && ( // Render the dropdown only when hovering
            <div className="all-tools-dropdown">
              <div className="tools-section">
                <strong>ORGANIZE PDF</strong>
                <ul>
                  <li>Merge PDF</li>
                  <li>Split PDF</li>
                  <li>Remove pages</li>
                  <li>Extract pages</li>
                  <li>Organize PDF</li>
                  <li>Scan to PDF</li>
                </ul>
              </div>
              <div className="tools-section">
                <strong>OPTIMIZE PDF</strong>
                <ul>
                  <li>Compress PDF</li>
                  <li>Repair PDF</li>
                  <li>OCR PDF</li>
                </ul>
              </div>
              {/* Add more sections as needed */}
              <div className="tools-section">
                <strong>CONVERT TO PDF</strong>
                <ul>
                  <li>JPG to PDF</li>
                  <li>WORD to PDF</li>
                  <li>POWERPOINT to PDF</li>
                  <li>EXCEL to PDF</li>
                  <li>HTML to PDF</li>
                </ul>
              </div>
              <div className="tools-section">
                <strong>CONVERT FROM PDF</strong>
                <ul>
                  <li>PDF to JPG</li>
                  <li>PDF to WORD</li>
                  <li>PDF to POWERPOINT</li>
                  <li>PDF to EXCEL</li>
                  <li>PDF to PDF/A</li>
                 
                </ul>
              </div>
              <div className="tools-section">
                <strong>EDIT PDF</strong>
                <ul>
                  <li>Rotate PDF</li>
                  <li>Add page Numbers</li>
                  <li>Add watermark</li>
                  <li>Edit PDF</li>
                </ul>
              </div>
              <div className="tools-section">
                <strong>PDF Security</strong>
                <ul>
                  <li>Unlock PDF</li>
                  <li>Protect PDF</li>
                  <li>Sign PDF</li>
                  <li>Redact PDF</li>
                  <li>Compare PDF</li>
                </ul>
              </div>
            </div>
          )}
          </li>
          </ul>
        </div>
        <div className="action">
        <Link to='/login'> <p className='poppins-bold'>Login</p></Link>
  <Link to='/signup'> <p className='poppins-bold'> Sign Up</p></Link>
  <div className="profile-icon" onClick={handleProfileClick}>
    <FaUserCircle size={24} />
  </div>
</div>
      </nav>
    </header>
  );
};

export default Header;
