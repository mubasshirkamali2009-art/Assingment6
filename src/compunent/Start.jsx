import React from "react";

const Start = () => {
  return (
    <section className="bg-purple-600 py-10 px-10">
      <div className="flex justify-around items-center  gap-6">

        <div className="text-center">
          <h2 className="sm:text-xl md:text-4xl  lg:text-4xl font-black text-white">50K+</h2>
          <p className="text-purple-200 text-sm mt-1">Active Users</p>
        </div>

        <div className="w-px h-12 bg-purple-400"></div>

        <div className="text-center">
          <h2 className=" sm:text-xl md:text-4xl  lg:text-4xl font-black text-white">200+</h2>
          <p className="text-purple-200 text-sm mt-1">Premium Tools</p>
        </div>

        <div className="w-px h-12 bg-purple-400"></div>

        <div className="text-center">
          <h2 className="sm:text-xl md:text-4xl  lg:text-4xl font-black text-white">4.9</h2>
          <p className="text-purple-200 text-sm mt-1">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Start;