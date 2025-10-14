import React from 'react';
import img from '../../assets/images/bg.jpg';

const Home = () => {
  return (
    <div>
      <section
        id="hero"
        className="flex flex-col justify-center items-center text-center relative h-[70vh] "
      >
        {/* Background Image */}
        <img
          src={img}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay for better text visibility */}
        <div
          id="hero-overlay"
          className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"
        ></div>

        {/* Text Content */}
        <header className="relative ">
          <p
            id="subtext-one"
            className="text-3xl lg:text-4xl font-bold text-pink-500 mb-2 font-baskerville"
          >
            Welcome to
          </p>
          <p
            id="subtext-two"
            className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-pink-500 mb-5 font-baskerville italic"
          >
            NUTRIBLEND BAS LTD
          </p>
        </header>
      </section>
    </div>
  );
};

export default Home;
