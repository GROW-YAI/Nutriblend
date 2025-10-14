import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import img1 from '../assets/images/f1.jpg';
import img2 from '../assets/images/f2.jpg';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Gallery Section */}
        <div className="footer-gallery space-y-8">
          <h4 className="text-xl font-semibold text-gray-300 tracking-wide mb-4">
            GALLERY
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <a href="images/photo-gallery-01.jpg" className="hover:opacity-75">
              <img
                src={img1}
                alt="GALLERY"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </a>
            <a href="images/photo-gallery-02.jpg" className="hover:opacity-75">
              <img
                src={img2}
                alt="GALLERY"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>

        {/* Latest Twitter Section */}
        <div className="footer-social space-y-8">
          <h4 className="text-xl font-semibold text-gray-300 tracking-wide mb-4">
            LATEST TWITTER
          </h4>
          <div className="space-y-6">
            <div>
              <i className="fa fa-twitter text-blue-500 mr-3 text-xl"></i>
              <p className="text-gray-400 text-sm">
                Nutriblend is an agro-processing startup dedicated to adding
                value to cashews and tiger nuts by producing high-quality
                dairy-free milk and powdered milk alternatives.
              </p>
              <a
                href="#"
                className="text-pink-400 text-sm font-semibold hover:underline"
              >
                NUTRIBLEND BAS LTD
              </a>
              <span className="block text-gray-500 text-xs mt-1">
                15 Dec 2024
              </span>
            </div>
            <div>
              <i className="fa fa-twitter text-blue-500 mr-3 text-xl"></i>
              <p className="text-gray-400 text-sm">
                Nutriblend offers nutritious, dairy-free alternatives made from
                cashews and tiger nuts, ideal for health-conscious individuals
                and those with lactose intolerance.
              </p>
              <a
                href="#"
                className="text-pink-400 text-sm font-semibold hover:underline"
              >
                NUTRIBLEND BAS LTD
              </a>
              <span className="block text-gray-500 text-xs mt-1">
                15 Dec 2024
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Icons with Follow Us on Top */}
        <div className="icons-footer flex flex-col items-center justify-center mt-8 space-y-6">
          <h1 className="text-xl font-semibold mb-4 text-center">Follow Us</h1>
          <div className="flex space-x-6">
            <a
              href="https://web.facebook.com/profile.php?id=61569938162895"
              className="text-white hover:text-red-600 transition-colors duration-300 text-3xl"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/nutriblend_delight/"
              className="text-white hover:text-red-600 transition-colors duration-300 text-3xl"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@nutriblend.delight?_t=ZM-8s0Q6Y170Sc&_r=1"
              className="text-white hover:text-red-600 transition-colors duration-300 text-3xl"
              aria-label="Follow us on Tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* After Footer Section */}
      <div className="after-footer bg-gray-800 py-6 mt-12 text-center text-gray-500">
        <div className="footer-content flex justify-between items-center container mx-auto">
          <div className="text-sm text-gray-400">© 2024 NUTRIBLEND BAS LTD</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
