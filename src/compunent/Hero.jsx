import React from 'react';
import BannerImg from '../assets/banner.png';

const Hero = () => {
    return (
        <div>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse justify-around lg:gap-40">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <div className="flex items-center gap-2 bg-purple-100 text-purple-600 font-semibold px-4 py-2 rounded-full mb-4 w-fit">
        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
        New AI-Powered Tools Available
      </div>
      <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6 text-gray-400 text-sm max-w-md">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.
      </p>
      <div className="flex gap-3">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
          Explore Products
        </button>
        <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-2 px-5 rounded-full transition duration-300 flex items-center gap-2 ">
          <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">▶</span>
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;