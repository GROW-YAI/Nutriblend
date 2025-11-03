import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import OurTeam from './team';
import ReviewsSection from './review';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpeg';
import img4 from '../../assets/images/bg.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/prod5.jpg';
import img8 from '../../assets/images/prod6.jpg';

const Products = () => {
  return (
    <>
      {/* Section: Our Products */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-300">
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="text-pink-500 text-3xl font-baskerville">
            Our Products
          </span>
          <h3 className="text-pink-500 text-2xl italic font-baskerville mt-2">
            Non-dairy milk alternatives
          </h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img1}
              alt="Products"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">Products</p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
          {/* Product 2 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img2}
              alt="Powdered Milk"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">
              Powdered Milk
            </p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
          {/* Product 3 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img3}
              alt="Liquid Milk"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">Liquid Milk</p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
          {/* Product 4 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img4}
              alt="Tiger Nuts"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">Tiger Nuts</p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
          {/* Product 5 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img5}
              alt="Powdered Tiger Nut"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">
              Powdered Tiger Nut
            </p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
          {/* Product 6 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img6}
              alt="Cashew Nut"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">Cashew Nut</p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
          {/* Product 7 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img7}
              alt="Almond Milk"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">Tiger Nut/Cashew Powder</p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
          {/* Product 8 */}
          <div className="text-center bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
            <img
              src={img8}
              alt="Coconut Milk"
              className="w-full h-[250px] object-cover rounded mb-4"
            />
            <p className="text-lg text-gray-700 font-bold">Nutri Delight</p>
            <Link to="/#contact" className="mt-3 bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <OurTeam />

      <ReviewsSection />
    </>
  );
};

export default Products;
