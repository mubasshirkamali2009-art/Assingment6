import React from "react";
import package_img from "../assets/package.png";
import Play from "../assets/Play.png";
import rocket from "../assets/rocket.png";
import user from "../assets/user.png";

const GetStarted = () => {
  const steps = [
    {
      icon: user,
      number: "1",
      title: "Create Account",
      desc: "Sign up for free accounts, it's easy and required to get started.",
    },
    {
      icon: package_img,
      number: "2",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs instantly.",
    },
    {
      icon: rocket,
      number: "3",
      title: "Start Creating",
      desc: "Download and start using the premium tools immediately.",
    },
  ];

  return (
    <section className="bg-white py-20 px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-black text-gray-800">Get Started In 3 Steps</h2>
        <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
        <div className="flex justify-center items-center gap-1 mt-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`h-1 rounded-full ${i === 3 || i === 4 ? "w-6 bg-purple-500" : "w-3 bg-purple-200"}`}></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="border border-dashed border-gray-300 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
              {step.number}
            </div>
            <div className="flex justify-center mb-4 mt-2">
              <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400 text-center leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;