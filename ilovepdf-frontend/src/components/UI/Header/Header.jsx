import React, { useState } from 'react';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { NavigationMenu } from '@radix-ui/react-navigation-menu';

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/signup');
  };

  return (
    <header>
      <NavigationMenu className="flex justify-between items-center p-4 shadow-md bg-white">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="https://www.ilovepdf.com/img/ilovepdf.svg" alt="iLovePDF Logo" className="h-8" />
          </Link>
        </div>

        {/* PDF Tools Menu */}
        <div className="flex space-x-6">
          <Button variant="ghost">Merge PDF</Button>
          <Button variant="ghost">Split PDF</Button>
          <Button variant="ghost">Compress PDF</Button>

          {/* Convert PDF Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                Convert PDF <FaChevronDown className="ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Convert to PDF</DropdownMenuLabel>
              <DropdownMenuItem>JPG to PDF</DropdownMenuItem>
              <DropdownMenuItem>WORD to PDF</DropdownMenuItem>
              <DropdownMenuItem>POWERPOINT to PDF</DropdownMenuItem>
              <DropdownMenuItem>EXCEL to PDF</DropdownMenuItem>
              <DropdownMenuItem>HTML to PDF</DropdownMenuItem>
              <DropdownMenuLabel>Convert from PDF</DropdownMenuLabel>
              <DropdownMenuItem>PDF to JPG</DropdownMenuItem>
              <DropdownMenuItem>PDF to WORD</DropdownMenuItem>
              <DropdownMenuItem>PDF to POWERPOINT</DropdownMenuItem>
              <DropdownMenuItem>PDF to EXCEL</DropdownMenuItem>
              <DropdownMenuItem>PDF to PDF/A</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* All PDF Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                All PDF Tools <FaChevronDown className="ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Organize PDF</DropdownMenuLabel>
              <DropdownMenuItem>Merge PDF</DropdownMenuItem>
              <DropdownMenuItem>Split PDF</DropdownMenuItem>
              <DropdownMenuItem>Remove pages</DropdownMenuItem>
              <DropdownMenuItem>Extract pages</DropdownMenuItem>
              <DropdownMenuItem>Organize PDF</DropdownMenuItem>
              <DropdownMenuItem>Scan to PDF</DropdownMenuItem>

              <DropdownMenuLabel>Optimize PDF</DropdownMenuLabel>
              <DropdownMenuItem>Compress PDF</DropdownMenuItem>
              <DropdownMenuItem>Repair PDF</DropdownMenuItem>
              <DropdownMenuItem>OCR PDF</DropdownMenuItem>

              <DropdownMenuLabel>Edit PDF</DropdownMenuLabel>
              <DropdownMenuItem>Rotate PDF</DropdownMenuItem>
              <DropdownMenuItem>Add page numbers</DropdownMenuItem>
              <DropdownMenuItem>Add watermark</DropdownMenuItem>
              <DropdownMenuItem>Edit PDF</DropdownMenuItem>

              <DropdownMenuLabel>PDF Security</DropdownMenuLabel>
              <DropdownMenuItem>Unlock PDF</DropdownMenuItem>
              <DropdownMenuItem>Protect PDF</DropdownMenuItem>
              <DropdownMenuItem>Sign PDF</DropdownMenuItem>
              <DropdownMenuItem>Redact PDF</DropdownMenuItem>
              <DropdownMenuItem>Compare PDF</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="poppins-bold">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="destructive" className="poppins-bold">Sign Up</Button>
          </Link>

          {/* Profile Icon
          <Avatar onClick={handleProfileClick} className="cursor-pointer">
            <FaUserCircle size={24} />
            <AvatarFallback>PK</AvatarFallback>
          </Avatar> */}
        </div>
      </NavigationMenu>
    </header>
  );
};

export default Header;
