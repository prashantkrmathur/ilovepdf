import React, { useState } from 'react';
import './Header.css';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa'; // Import the profile icon
import { Link, useNavigate } from 'react-router-dom';
import '../../../../src/index.css';

const Header = () => {
  const [showConvertMenu, setShowConvertMenu] = useState(false);
  const [showAllToolsMenu, setShowAllToolsMenu] = useState(false);
  const navigate = useNavigate();

  const handleConvertMouseEnter = () => {
    setShowConvertMenu(true);
  };

  const handleAllToolsMouseEnter = () => {
    setShowAllToolsMenu(true);
  };

  const handleMouseLeave = () => {
    setShowConvertMenu(false);
    setShowAllToolsMenu(false);
  };

  const handleMenuItemClick = () => {
    setShowConvertMenu(false);
    setShowAllToolsMenu(false);
  };

  const handleProfileClick = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <header>
      <nav className='poppins-regular'>
        <div className="logo">
          <Link to='/'>
            <img src='https://www.ilovepdf.com/img/ilovepdf.svg' alt="iLovePDF Logo" />
          </Link>
        </div>

        <div className="pdf-tools-container" onMouseLeave={handleMouseLeave}>
          <ul className="main-menu">
            <li><Link to="/merge-pdf">Merge PDF</Link></li>
            <li><Link to="/split-pdf">Split PDF</Link></li>
            <li><Link to="/compress-pdf">Compress PDF</Link></li>

            {/* Convert PDF menu with dropdown */}
            <li
              onMouseEnter={handleConvertMouseEnter}
              className={`dropdown-item ${showConvertMenu ? 'active' : ''}`}
            >
              <div className="oneline" onClick={handleMenuItemClick}>
                <span>Convert PDF</span> 
                <FaChevronDown className="dropdown-icon" />
              </div>
              {showConvertMenu && (
                <div className="convert-dropdown">
                  <div className="convert-section">
                    <strong>Convert to PDF</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/jpg-to-pdf">JPG to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/word-to-pdf">WORD to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/powerpoint-to-pdf">POWERPOINT to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/excel-to-pdf">EXCEL to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/html-to-pdf">HTML to PDF</Link></li>
                    </ul>
                  </div>
                  <div className="convert-section">
                    <strong>Convert from PDF</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-jpg">PDF to JPG</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-word">PDF to WORD</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-powerpoint">PDF to POWERPOINT</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-excel">PDF to EXCEL</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-pdfa">PDF to PDF/A</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* All PDF Tools menu with dropdown */}
            <li
              onMouseEnter={handleAllToolsMouseEnter}
              className={`dropdown-item ${showAllToolsMenu ? 'active' : ''}`}
            >
              <div className="oneline" onClick={handleMenuItemClick}>
                <span>All PDF Tools</span> 
                <FaChevronDown className="dropdown-icon" />
              </div>

              {showAllToolsMenu && (
                <div className="all-tools-dropdown">
                  <div className="tools-section">
                    <strong>ORGANIZE PDF</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/merge-pdf">Merge PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/split-pdf">Split PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/remove-pages">Remove Pages</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/extract-pages">Extract Pages</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/organize-pdf">Organize PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/scan-to-pdf">Scan to PDF</Link></li>
                    </ul>
                  </div>
                  <div className="tools-section">
                    <strong>OPTIMIZE PDF</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/compress-pdf">Compress PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/repair-pdf">Repair PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/ocr-pdf">OCR PDF</Link></li>
                    </ul>
                  </div>
                  <div className="tools-section">
                    <strong>CONVERT TO PDF</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/jpg-to-pdf">JPG to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/word-to-pdf">WORD to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/powerpoint-to-pdf">POWERPOINT to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/excel-to-pdf">EXCEL to PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/html-to-pdf">HTML to PDF</Link></li>
                    </ul>
                  </div>
                  <div className="tools-section">
                    <strong>CONVERT FROM PDF</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-jpg">PDF to JPG</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-word">PDF to WORD</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-powerpoint">PDF to POWERPOINT</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-excel">PDF to EXCEL</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/pdf-to-pdfa">PDF to PDF/A</Link></li>
                    </ul>
                  </div>
                  <div className="tools-section">
                    <strong>EDIT PDF</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/rotate-pdf">Rotate PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/page-numbers">Add Page Numbers</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/watermark">Add Watermark</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/edit-pdf">Edit PDF</Link></li>
                    </ul>
                  </div>
                  <div className="tools-section">
                    <strong>PDF Security</strong>
                    <ul>
                      <li onClick={handleMenuItemClick}><Link to="/unlock-pdf">Unlock PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/protect-pdf">Protect PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/sign-pdf">Sign PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/redact-pdf">Redact PDF</Link></li>
                      <li onClick={handleMenuItemClick}><Link to="/compare-pdf">Compare PDF</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="action">
          <Link to='/login'><p className='poppins-bold'>Login</p></Link>
          <Link to='/signup'><p className='poppins-bold'>Sign Up</p></Link>
          <div className="profile-icon" onClick={handleProfileClick}>
            <FaUserCircle size={24} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
