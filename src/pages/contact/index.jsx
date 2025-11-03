import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Contact Details Section */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            CONTACT US
          </h2>

          <div className="space-y-4 text-black text-sm md:text-base">
            {/* Location */}
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-pink-500" />
              <span>Sunyani-Fiapre, Ghana</span>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3 text-pink-500" />
              <div>
                <p>(+233) 59 483 4474</p>
                <p>(+233) 50 553 3900</p>
                <p>(+233) 55 736 7368</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-pink-500" />
              <span>nutriblend03@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Opening Times Section */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            OPENING TIMES
          </h2>

          <div className="flex items-center justify-center">
            <FaClock className="mr-3 text-pink-500" />
            <div className="text-center text-black text-sm md:text-base">
              <p>08:00 AM – 5:00 PM</p>
              <p>Monday - Saturday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
