import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#9b5de5] text-white w-full">
      <div className="container mx-auto flex justify-between items-center p-4 w-full">
        <a href="/" className="flex items-center">
          <img src="https://static.vecteezy.com/system/resources/previews/026/658/515/non_2x/engineers-constructing-industrial-background-photo.jpg" alt="ConstructionConnect Logo" className="w-24"/>
        </a>
        <div className="hidden md:flex space-x-6">
          <button className="bg-[#f15bb5] hover:bg-[#fe440] text-white font-bold py-2 px-4 rounded">Home</button>
          <button className="bg-[#00bbf9] hover:bg-[#00f5d4] text-white font-bold py-2 px-4 rounded">Job Board</button>
          <button className="bg-[#f15bb5] hover:bg-[#fe440] text-white font-bold py-2 px-4 rounded">Contractors</button>
          <button className="bg-[#00bbf9] hover:bg-[#00f5d4] text-white font-bold py-2 px-4 rounded">Workers</button>
          <button className="bg-[#f15bb5] hover:bg-[#fe440] text-white font-bold py-2 px-4 rounded">About Us</button>
          <button className="bg-[#00bbf9] hover:bg-[#00f5d4] text-white font-bold py-2 px-4 rounded">Contact</button>
          <button className="bg-[#f15bb5] hover:bg-[#fe440] text-white font-bold py-2 px-4 rounded">Blog/News</button>
          <button className="bg-[#00bbf9] hover:bg-[#00f5d4] text-white font-bold py-2 px-4 rounded">Resources</button>
          <button className="bg-[#f15bb5] hover:bg-[#fe440] text-white font-bold py-2 px-4 rounded">Pricing</button>
          <button className="bg-[#00bbf9] hover:bg-[#00f5d4] text-white font-bold py-2 px-4 rounded">Sign In</button>
          <button className="bg-[#f15bb5] hover:bg-[#fe440] text-white font-bold py-2 px-4 rounded">Sign Up</button>
          <input type="text" placeholder="Search..." className="bg-[#9b5de5] text-white border-none rounded px-4 py-2 outline-none"/>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
     
    </nav>
  );
};

export default Navbar;
