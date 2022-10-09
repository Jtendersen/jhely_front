import Image from "next/image";
import { Input } from "postcss";
import React from "react";

const Navbar = () => {
  return (
    <header class="flex flex-row md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-[#0D0D0D]">
      <div class="basis-1/4 flex items-center mb-4 md:mb-0">
        <h1 class="leading-none text-2xl p-9">
          <a href="#">
            <img class="w-1/2" src="../Assets/Logo.png" alt="logo.png" />
          </a>
        </h1>

        {/* <a class="text-black hover:text-orange md:hidden" href="#">
          <i class="fa fa-2x fa-bars"></i>
        </a> */}
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
      {/* <!-- END Global navigation --> */}
    </header>

    // <nav class="flex absolute justify-between px-20 py-10 items-center bg-primary">
    //   <div class="absolute py-9 px-10">
    //     <img class="" src="../Assets/Logo.png" alt="logo.png" />
    //   </div>

    //   {/* <h1 class="text-xl text-secondary font-bold">HotCoffee</h1> */}
    //   <div class="flex items-center">
    //     <div class="flex items-center">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         class="h-5 w-5 pt-0.5 text-gray-600"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //         />
    //       </svg>
    //       <input
    //         class="ml-2 outline-none bg-transparent font-"
    //         type="text"
    //         name="search"
    //         id="search"
    //         placeholder="Search..."
    //       />
    //     </div>
    //     <ul class="flex items-center space-x-6">
    //       <li class="font-semibold text-gray-700">Home</li>
    //       <li class="font-semibold text-gray-700">Articles</li>
    //       <li>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path d="M12 14l9-5-9-5-9 5 9 5z" />
    //           <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    //           />
    //         </svg>
    //       </li>
    //       <li>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //           />
    //         </svg>
    //       </li>
    //       <li>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    //           />
    //         </svg>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
