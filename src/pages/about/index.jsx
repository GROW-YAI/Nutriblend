import React from 'react';
import img from '../../assets/images/abt.jpg';

const About = () => {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-3xl font-semibold text-pink-500 font-baskervville">
          About Us
        </p>
        <p className="text-2xl italic text-pink-500 font-baskervville">
          NUTRIBLEND BAS LTD
        </p>
      </div>

      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center p-6 max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8"
      >
        {/* About Image */}
        <img
          id="about-image"
          src={img}
          alt="About Nutriblend"
          className="w-full max-w-sm h-auto rounded-[4rem] shadow-lg"
        />

        {/* About Text */}
        <div id="about-text" className="flex flex-col justify-center space-y-6">
          {/* Paragraphs */}
          <p id="sub-header-text" className="text-gray-700 leading-relaxed">
            Nutriblend is an agro-processing startup dedicated to adding value
            to cashews and tiger nuts by producing high-quality dairy-free milk
            and powdered milk alternatives. Our mission is to address the
            limited availability of nutritious and affordable non-dairy options
            in Ghana, especially for individuals with lactose intolerance and
            those who prefer plant-based alternatives. Our products are
            carefully crafted to combine the nutritional benefits of cashews and
            tiger nuts, offering a wholesome alternative to traditional dairy
            products. By reducing the reliance on cashew exportation, we aim to
            boost local processing and contribute to the growing demand for
            dairy-free alternatives in Ghana.
          </p>

          <p id="sub-header-text" className="text-gray-700 leading-relaxed">
            At Nutriblend, we are committed to making a positive impact on our
            community and the environment. We prioritize job creation for youth
            and women in rural areas, with a focus on empowering women. By
            increasing the income of smallholder farmers and adopting
            eco-friendly packaging, we strive to promote sustainability and
            economic growth. Our goal is to make plant-based dairy alternatives
            accessible, nutritious, and affordable while contributing to a
            healthier, more sustainable future for everyone.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
