import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';


const NavBar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close menu after clicking a link (mobile)
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white fixed w-full top-0 z-10 shadow-md border-b border-gray-200">
      {/* Logo (Link to Home) */}
      <div id="logo-container">
        <Link to="home" smooth={true} offset={-70} duration={500}>
          <img
            src={logo}
            alt="Logo"
            className="w-auto h-12 cursor-pointer bg-gray-100 rounded shadow p-1"
          />
        </Link>
      </div>

      {/* Links (Desktop Navigation) */}
      <div className="hidden md:flex gap-8">
        <Link
          to="home"
          smooth={false}
          offset={-70}
          duration={100}
          className={`text-black cursor-pointer ${
            activeSection === 'home' ? 'text-pink-400' : 'hover:text-pink-400'
          }`}
        >
          Home
        </Link>
        <Link
          to="about-us"
          smooth={false}
          offset={-70}
          duration={100}
          className={`text-black cursor-pointer ${
            activeSection === 'about-us'
              ? 'text-pink-400'
              : 'hover:text-pink-400'
          }`}
        >
          About
        </Link>
        <Link
          to="products"
          smooth={false}
          offset={-70}
          duration={100}
          className={`text-black cursor-pointer ${
            activeSection === 'products'
              ? 'text-pink-400'
              : 'hover:text-pink-400'
          }`}
        >
          Products
        </Link>
        <Link
          to="contact-us"
          smooth={false}
          offset={-70}
          duration={100}
          className={`text-black cursor-pointer ${
            activeSection === 'contact-us'
              ? 'text-pink-400'
              : 'hover:text-pink-400'
          }`}
        >
          Contact
        </Link>
        <Link
          to="products"
          smooth={true}
          offset={-70}
          duration={300}
          className="ml-4 bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 transition-all border-2 border-pink-500 hover:border-pink-600 cursor-pointer"
        >
          Order Now
        </Link>
      </div>

      {/* Hamburger Menu (Mobile Navigation) */}
      <div
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Open navigation menu"
        role="button"
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === 'Enter' || e.key === ' ') toggleMenu();
        }}
      >
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 right-0 bg-white p-5 md:hidden z-20`}
      >
        <Link
          to="home"
          smooth={false}
          offset={-70}
          duration={100}
          className="block text-black py-2 hover:text-pink-400 cursor-pointer"
          onClick={handleMobileLinkClick}
        >
          Home
        </Link>
        <Link
          to="about-us"
          smooth={false}
          offset={-70}
          duration={100}
          className="block text-black py-2 hover:text-pink-400 cursor-pointer"
          onClick={handleMobileLinkClick}
        >
          About
        </Link>
        <Link
          to="products"
          smooth={false}
          offset={-70}
          duration={100}
          className="block text-black py-2 hover:text-pink-400 cursor-pointer"
          onClick={handleMobileLinkClick}
        >
          Products
        </Link>
        <Link
          to="contact-us"
          smooth={false}
          offset={-70}
          duration={100}
          className="block text-black py-2 hover:text-pink-400 cursor-pointer"
          onClick={handleMobileLinkClick}
        >
          Contact
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-70}
          duration={300}
          className="mt-4 w-full bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 transition-all border-2 border-pink-500 hover:border-pink-600"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
