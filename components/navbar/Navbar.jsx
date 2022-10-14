import Image from "next/image";
import { Input } from "postcss";
import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-[#0D0D0D] px-2 sm:px-4 py-2.5">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
          <img
            src="../Assets/Logo.png"
            class="mr-3 h-6 sm:h-9 p-1"
            alt="Frontierx Logo"
          />
        </a>
        <div class="flex md:order-1">
          {/* <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button> */}
          <div class="hidden relative md:block">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-[#A2A2A2]"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block p-2 pl-10 w-full text-[#A2A2A2] font-Manrope font-semibold text-sm bg-[#1F1F1F] rounded-lg sm:text-sm border-0 focus:ring-slate-400 focus:border-slate-400 "
              placeholder="Lorem ipsum"
            />
          </div>
          <button
            id="openMenu"
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class=" justify-between items-center w-full md:flex md:w-auto md:order-1 "
          id="navbar-search"
        >
          <div class="relative mt-3 md:hidden">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block p-2 pl-10 w-full text-[#A2A2A2] font-Manrope font-semibold text-sm bg-[#1F1F1F] rounded-lg sm:text-sm border-0 focus:ring-slate-400 focus:border-slate-400 "
              placeholder="Lorem ipsum"
            />
          </div>
          <ul class="flex flex-col p-4 mt-4 font-Manrope font-extrabold text-white bg-[#0D0D0D] gap-3  md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-extrabold md:border-0 md:bg-[#0D0D0D] ">
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-[#A2A2A2] bg-[#0D0D0D] rounded md:bg-transparent md:text-[#A2A2A2] md:p-0"
                aria-current="page"
              >
                Lorem
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Lorem
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Lorem
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div class=" bg-[#0D0D0D] grid grid-cols-5 p-4 justify-between gap-4">
    //   <a class="flex justify-center" href="#">
    //     <img class=" p-3 " src="../Assets/Logo.png" alt="logo.png" />
    //   </a>
    //   <div class="col-span-3 ml-10">
    //     <form class="w-full">
    //       <label class="relative block " for="search-form">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           stroke-width="1.5"
    //           class="w-6 h-6 absolute stroke-gray-400 fill-[#1F1F1F] pointer-events-none top-1/2 transform -translate-y-1/2 left-3"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    //           />
    //         </svg>
    //         <input
    //           class="bg-[#1F1F1F] font-Manrope font-semibold  text-[#A2A2A2] rounded-[10px] focus:border-orange py-3 px-4 shadow w-full block pl-14 "
    //           placeholder="Lorem ipsum"
    //           type="text"
    //         />
    //       </label>
    //       <button class="hidden">Submit</button>
    //     </form>
    //   </div>
    //   <div class="grid-cols-2">
    //     <div class="basis-1/4 ">
    //       <ul class="flex justify-around list-reset md:flex md:items-center font-Manrope font-semibold text-white">
    //         <li class="md:ml-4">
    //           <a
    //             class="block no-underline hover:underline py-2 text-grey-darkest text-base hover:text-slate-500 md:border-none md:p-0"
    //             href="#"
    //           >
    //             Lorem
    //           </a>
    //         </li>
    //         <li class="md:ml-4">
    //           <a
    //             class="border-t block no-underline hover:underline py-2 text-grey-darkest text-base  hover:text-slate-500 md:border-none md:p-0"
    //             href="#"
    //           >
    //             Lorem
    //           </a>
    //         </li>
    //         <li class="md:ml-4">
    //           <a
    //             class="border-t block no-underline hover:underline py-2 text-grey-darkest text-base  hover:text-slate-500 md:border-none md:p-0"
    //             href="#"
    //           >
    //             Lorem
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    // <header class=" relative z-20 flex flex-row md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-[#0D0D0D]">

    //   <div class="basis-1/4 flex items-center mb-4 md:mb-0">
    //     <h1 class="leading-none text-2xl p-9">
    //       <a href="#">
    //         <img class="w-1/2" src="../Assets/Logo.png" alt="logo.png" />
    //       </a>
    //     </h1>
    //   </div>

    //   {/* <!-- Search field --> */}
    //   <form class=" basis-1/2 mb-4 w-full md:mb-0 md:w-1/4">
    //     <label class="relative block " for="search-form">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         stroke-width="1.5"
    //         class="w-6 h-6 absolute stroke-gray-400 fill-[#1F1F1F] pointer-events-none top-1/2 transform -translate-y-1/2 left-3"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    //         />
    //       </svg>
    //       <input
    //         class="bg-[#1F1F1F] font-Manrope font-semibold  text-[#A2A2A2] rounded-[10px] focus:border-orange py-3 px-4 shadow w-full block pl-14 "
    //         placeholder="Lorem ipsum"
    //         type="text"
    //       />
    //     </label>
    //     <button class="hidden">Submit</button>
    //   </form>
    //   {/* <!-- END Search field --> */}

    //   {/* <!-- Global navigation --> */}
    //   <div class="basis-1/4 ">
    //     <ul class="flex justify-around list-reset md:flex md:items-center font-Manrope font-semibold text-white">
    //       <li class="md:ml-4">
    //         <a
    //           class="block no-underline hover:underline py-2 text-grey-darkest text-base hover:text-slate-500 md:border-none md:p-0"
    //           href="#"
    //         >
    //           Lorem
    //         </a>
    //       </li>
    //       <li class="md:ml-4">
    //         <a
    //           class="border-t block no-underline hover:underline py-2 text-grey-darkest text-base  hover:text-slate-500 md:border-none md:p-0"
    //           href="#"
    //         >
    //           Lorem
    //         </a>
    //       </li>
    //       <li class="md:ml-4">
    //         <a
    //           class="border-t block no-underline hover:underline py-2 text-grey-darkest text-base  hover:text-slate-500 md:border-none md:p-0"
    //           href="#"
    //         >
    //           Lorem
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div class="border-none h-[6px] bg-gradient-to-r from-[#665AEF] to-[#FC364C]"></div>

    //   {/* <!-- END Global navigation --> */}
    // </header>
  );
};

export default Navbar;
