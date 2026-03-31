import React, { useState } from 'react';

const NavBar = ({carts , setActiveTab}) => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='sticky top-0 z-50 bg-white'>
            <div className="navbar bg-base-100 shadow-sm flex justify-around sm:justify-between">
              <div className="flex">
                <h1 className="text-purple-600 font-bold text-2xl">DigiTools</h1>
              </div>

              <div className='hidden md:flex gap-4'>
                <ul className='flex gap-4'>
                  <li>Products</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Testimonials</li>
                  <li>FAQ</li>
                </ul>
              </div>

              <div className="flex gap-4 items-center">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={() => setActiveTab("cart")}>
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item text-black">{carts?.length || 0}</span>
                  </div>
                </div>

                <div className="hidden md:block">
                  <h2 className='btn rounded-3xl'>login</h2>
                </div>

                <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
                  Get Started
                </button>

                <button
                  className="md:hidden btn btn-ghost btn-circle"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {menuOpen && (
              <div className="md:hidden bg-base-100 shadow-md px-6 py-4 flex flex-col gap-3">
                <ul className="flex flex-col gap-3">
                  <li>Products</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Testimonials</li>
                  <li>FAQ</li>
                </ul>
                <h2 className='btn rounded-3xl w-full'>login</h2>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300 w-full">
                  Get Started
                </button>
              </div>
            )}
        </div>
    );
};

export default NavBar;