import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-around">
  <div className="flex">
    <h1 className="text-purple-600 font-bold text-2xl">DigiTools</h1>
  </div>

  <div className='flex  gap-4'>
    <ul  className='flex  gap-4'>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </ul>
  </div>
  <div className="flex gap-4">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
         
          <span className="badge badge-sm indicator-item">8</span> 
      
        </div>
      </div>
      
    </div>
    <div><h2 className='btn rounded-3xl'>login</h2></div>
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
  Get Started
</button>
  </div>
</div>
        </div>
    );
};

export default NavBar;