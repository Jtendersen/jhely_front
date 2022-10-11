import Image from "next/image";
import { Input } from "postcss";
import React from "react";

const Navbar = () => {
  return (
    <header class=" relative z-20 flex flex-row md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-[#0D0D0D]">
      <div class="basis-1/4 flex items-center mb-4 md:mb-0">
        <h1 class="leading-none text-2xl p-9">
          <a href="#">
            <img class="w-1/2" src="../Assets/Logo.png" alt="logo.png" />
          </a>
        </h1>
      </div>

      {/* <!-- Search field --> */}
      <form class=" basis-1/2 mb-4 w-full md:mb-0 md:w-1/4">
        <label class="relative block " for="search-form">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="w-6 h-6 absolute stroke-gray-400 fill-[#1F1F1F] pointer-events-none top-1/2 transform -translate-y-1/2 left-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            class="bg-[#1F1F1F] font-Manrope font-semibold  text-[#A2A2A2] rounded-[10px] focus:border-orange py-3 px-4 shadow w-full block pl-14 "
            placeholder="Lorem ipsum"
            type="text"
          />
        </label>
        <button class="hidden">Submit</button>
      </form>
      {/* <!-- END Search field --> */}

      {/* <!-- Global navigation --> */}
      <div class="basis-1/4 ">
        <ul class="flex justify-around list-reset md:flex md:items-center font-Manrope font-semibold text-white">
          <li class="md:ml-4">
            <a
              class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >
              Lorem
            </a>
          </li>
          <li class="md:ml-4">
            <a
              class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >
              Lorem
            </a>
          </li>
          <li class="md:ml-4">
            <a
              class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >
              Lorem
            </a>
          </li>
        </ul>
      </div>
      <div class="border-none h-[6px] bg-gradient-to-r from-[#665AEF] to-[#FC364C]"></div>

      {/* <!-- END Global navigation --> */}
    </header>
  );
};

export default Navbar;
