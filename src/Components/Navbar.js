import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black ">
      {/* bg-gradient-to-l from-[#2f3576] to-[#1462d6] */}
      <div className="">
      <div className="flex items-center justify-between md:px-10 pr-[20px] border-b-4 border-b-[#2e4884]">
      <div className="flex items-center">
            <a href="https://www.tehrihills.com/">
              <img
                className="md:w-[140px] md:h-[80px] w-[100px] h-[55px]"
                src="./LOGO.png"
                alt="TehriHills"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden text-[24px] font-medium md:flex space-x-16 font-serif">
            <a href="#" className="hover:text-gray-400 ">
              Home
            </a>
            

           <button className="bg-white rounded-lg px-2">
           <a href="https://www.tehrihills.com/contact-us/" className="hover:text-gray-400">
              Get in Touch
            </a>
           </button>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu - Full Screen Slide from Right */}
      {/* {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-80 z-50">
          <div
            className="absolute top-0 right-0 w-[75%] bg-white h-full p-4 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black text-3xl"
            >
              &times;
            </button>

            <div className="space-y-6 mt-16">
              <a
                href="#"
                className="block text-2xl text-black hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="block text-2xl text-black hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#"
                className="block text-2xl text-black hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
