import Image from "next/image";
import { Input } from "postcss";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#0D0D0D] px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="../Assets/Logo.png"
              className="  mr-3 h-6 sm:h-9 p-1"
              alt="Frontierx Logo"
            />
          </a>

          <div className="flex md:order-1">
            <div className="hidden relative md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#A2A2A2]"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <div className="flex flex-1">
                <input
                  type="text"
                  id="search-navbar"
                  className="block p-2 pl-10 w-full shadow-sm text-[#A2A2A2] font-Manrope font-semibold text-sm bg-[#1F1F1F] rounded-lg sm:text-sm border-0 focus:ring-slate-400 focus:border-slate-400 "
                  placeholder="Lorem ipsum"
                />
              </div>
            </div>
            <button
              id="openMenu"
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className=" justify-between items-center w-full md:flex md:w-auto md:order-1 "
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-[#A2A2A2] font-Manrope font-semibold text-sm bg-[#1F1F1F] rounded-lg sm:text-sm border-0 focus:ring-slate-400 focus:border-slate-400 "
                placeholder="Lorem ipsum"
              />
            </div>
            <ul className="flex flex-col p-4 font-Manrope font-extrabold text-sm text-white bg-[#0D0D0D] gap-3  md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-extrabold md:border-0 md:bg-[#0D0D0D] ">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-[#0D0D0D] rounded md:bg-transparent md:text-[#A2A2A2] md:p-0"
                  aria-current="page"
                >
                  Lorem
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Lorem
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Lorem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="relative z-10 border-none h-[6px] bg-gradient-to-r from-[#665AEF] to-[#FC364C]"></div>
    </>
  );
};

export default Navbar;
