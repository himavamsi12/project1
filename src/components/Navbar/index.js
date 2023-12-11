import React, { useState } from 'react';
import logo from '../../assests/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-gray-200 border-b-2 border-zinc-200 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-row lg:flex-row justify-between items-center  py-4 px-6 lg:px-0">
        <div className="flex items-center flex-shrink-0 text-white">
          <img src={logo} alt="Logo" className="h-10 " />
        </div>
        <div className="flex flex-col justify-center lg:justify-end mt-4 lg:mt-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" lg:hidden text-zinc-800 border-solid border-2 border-zinc-500 px-5 py-3 rounded-md text-xl/6"
          >
            <GiHamburgerMenu />
          </button>
          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-20 mt-4 lg:mt-0`}
          >
            <li>
              <a
                href="#"
                className="text-zinc-800 border-solid border-1 hover:bg-cyan-100 px-3 py-2 block lg:inline-block"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-800 border-solid border-1 hover:bg-cyan-100 px-3 py-2 block lg:inline-block"
              >
                Use cases
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-800 border-solid border-1 hover:bg-cyan-100 px-3 py-2 block lg:inline-block"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-800 border-solid border-1 hover:bg-cyan-100 px-3 py-2 block lg:inline-block"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-800 border-solid border-1 hover:bg-cyan-100 px-3 py-2 block lg:inline-block"
              >
                Industries
              </a>
            </li>
            <li>
              <button className="border-solid border-2 border-zinc-500 px-5 py-3 text-zinc-800 rounded-md text-xl/6 block lg:inline-block">
                Get API Keys
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
