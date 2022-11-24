import Accordion1 from "../components/accordion/Accordion1";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import Accordion2 from "../components/accordion/Accordion2";

export default function Home() {
  const [imgShow, setImgShow] = useState("true");

  const handleChange = function () {
    setImgShow(!imgShow);
  };

  return (
    <>
      <Navbar />
      <div class="relative bg-[#0D0D0D]">
        <div class="absolute z-0 left-1/4 max-w-full h-full w-3/4 animate-pulse bg-gradient-to-tr from-[#181818] via-[#3A273F] to-[#2e2d66] "></div>

        <div class=" grid grid-cols-7">
          <div class="col-span-7 ">
            <img
              class={
                imgShow
                  ? "rounded-xl pt-5 px-3 sm:pt-8 sm:px-4 md:pt-10 md:px-6 relative "
                  : "rounded-xl pt-5 px-3 sm:pt-8 sm:px-4 md:pt-10 md:px-6 relative blur-xl"
              }
              src="../Assets/image_125.png"
              alt="funny_faces.png"
            />
          </div>
        </div>
        <div class="flex justify-center transform -translate-y-1/2 ">
          <div class=" w-14 sm:w-24 md:w-28 lg:w-36 xl:w-44 2xl:w-64 z-0 ">
            <button onClick={handleChange}>
              <img
                src="../Assets/Ellipse_37.png"
                class="animate-bounce hover:animate-none"
              />
            </button>
          </div>
        </div>

        <div class="grid grid-cols-7 gap-5 -translate-y-4 md:-translate-y-8 xl:-translate-y-20 font-Manrope text-center">
          <div class="z-0 col-start-3 col-span-3  font-extrabold text-white text-sm sm:text-2xl md:text-5xl">
            Lorem ipsum
          </div>
          <div class=" col-start-3 col-span-3 text-[#F3F3F3] text-xs py-2 sm:text-sm md:text-base md:py-4 ">
            Created by: <span class=" text-[#FC364C]">Lorem ipsum</span>
          </div>
          <div class="col-start-3 col-span-3 text-white text-xs py-2 mb-5 sm:text-sm md:text-base md:py-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </div>
        </div>

        <div class="grid grid-cols-3 gap-5 p-2 -translate-y-4 md:-translate-y-8 md:grid-cols-7 xl:-translate-y-20 font-Manrope text-center">
          {/* First Button */}
          <div class="col-start-1 text-xs md:col-start-3 md:text-base">
            <div class=" text-[#F6F6F6] font-extrabold">
              <>
                <button class="flex flex-wrap justify-evenly items-center bg-[#0D0D0D80] bg-opacity-50 focus:border focus:border-[#F6F6F6] shadow-inner rounded-md px-8 py-4 w-full">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.73684 12.8H0.789474V6.4H4.73684V12.8ZM3.15789 11.2V8H2.36842V11.2H3.15789ZM7.89474 11.2V4.8H7.10526V11.2H7.89474ZM9.47368 12.8H5.52632V3.2H9.47368V12.8ZM12.6316 11.2V1.6H11.8421V11.2H12.6316ZM14.2105 12.8H10.2632V0H14.2105V12.8ZM15 16H0V14.4H15V16Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                  Lorem ipsum
                </button>
              </>
            </div>
          </div>

          {/* Second Button */}
          <div class=" col-start-2 text-xs md:col-start-4 md:text-base">
            <div class=" text-[#F6F6F6] font-extrabold">
              <>
                <button class="flex flex-wrap justify-evenly items-center bg-[#0D0D0D] focus:border focus:border-[#F6F6F6] rounded-md px-8 py-4 w-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.60417 7.14581C3.18558 7.14581 2.77109 7.06337 2.38436 6.90318C1.99764 6.74299 1.64625 6.5082 1.35027 6.21222C1.05428 5.91623 0.819489 5.56484 0.659302 5.17812C0.499115 4.79139 0.416668 4.3769 0.416668 3.95831C0.416668 3.53972 0.499115 3.12523 0.659302 2.73851C0.819489 2.35178 1.05428 2.0004 1.35027 1.70441C1.64625 1.40842 1.99764 1.17363 2.38436 1.01345C2.77109 0.85326 3.18558 0.770813 3.60417 0.770813C4.44955 0.770813 5.2603 1.10664 5.85807 1.70441C6.45584 2.30218 6.79167 3.11294 6.79167 3.95831C6.79167 4.80369 6.45584 5.61444 5.85807 6.21222C5.2603 6.80999 4.44955 7.14581 3.60417 7.14581ZM3.95833 14.2291C3.11296 14.2291 2.3022 13.8933 1.70443 13.2955C1.10666 12.6978 0.770835 11.887 0.770835 11.0416C0.770835 10.1963 1.10666 9.38552 1.70443 8.78774C2.3022 8.18997 3.11296 7.85415 3.95833 7.85415C4.80371 7.85415 5.61446 8.18997 6.21224 8.78774C6.81001 9.38552 7.14583 10.1963 7.14583 11.0416C7.14583 11.887 6.81001 12.6978 6.21224 13.2955C5.61446 13.8933 4.80371 14.2291 3.95833 14.2291ZM11.0417 7.14581C10.6231 7.14581 10.2086 7.06337 9.82186 6.90318C9.43514 6.74299 9.08375 6.5082 8.78777 6.21222C8.49178 5.91623 8.25699 5.56484 8.0968 5.17812C7.93661 4.79139 7.85417 4.3769 7.85417 3.95831C7.85417 3.53972 7.93661 3.12523 8.0968 2.73851C8.25699 2.35178 8.49178 2.0004 8.78777 1.70441C9.08375 1.40842 9.43514 1.17363 9.82186 1.01345C10.2086 0.85326 10.6231 0.770813 11.0417 0.770813C11.887 0.770813 12.6978 1.10664 13.2956 1.70441C13.8933 2.30218 14.2292 3.11294 14.2292 3.95831C14.2292 4.80369 13.8933 5.61444 13.2956 6.21222C12.6978 6.80999 11.887 7.14581 11.0417 7.14581ZM11.0417 14.2291C10.1963 14.2291 9.38554 13.8933 8.78777 13.2955C8.18999 12.6978 7.85417 11.887 7.85417 11.0416C7.85417 10.1963 8.18999 9.38552 8.78777 8.78774C9.38554 8.18997 10.1963 7.85415 11.0417 7.85415C11.887 7.85415 12.6978 8.18997 13.2956 8.78774C13.8933 9.38552 14.2292 10.1963 14.2292 11.0416C14.2292 11.887 13.8933 12.6978 13.2956 13.2955C12.6978 13.8933 11.887 14.2291 11.0417 14.2291ZM3.60417 5.72915C4.07382 5.72915 4.52424 5.54258 4.85634 5.21048C5.18843 4.87839 5.375 4.42797 5.375 3.95831C5.375 3.48866 5.18843 3.03824 4.85634 2.70614C4.52424 2.37405 4.07382 2.18748 3.60417 2.18748C3.13451 2.18748 2.6841 2.37405 2.352 2.70614C2.0199 3.03824 1.83333 3.48866 1.83333 3.95831C1.83333 4.42797 2.0199 4.87839 2.352 5.21048C2.6841 5.54258 3.13451 5.72915 3.60417 5.72915ZM3.95833 12.8125C4.42799 12.8125 4.87841 12.6259 5.2105 12.2938C5.5426 11.9617 5.72917 11.5113 5.72917 11.0416C5.72917 10.572 5.5426 10.1216 5.2105 9.78948C4.87841 9.45738 4.42799 9.27081 3.95833 9.27081C3.48868 9.27081 3.03826 9.45738 2.70617 9.78948C2.37407 10.1216 2.1875 10.572 2.1875 11.0416C2.1875 11.5113 2.37407 11.9617 2.70617 12.2938C3.03826 12.6259 3.48868 12.8125 3.95833 12.8125ZM11.0417 5.72915C11.5113 5.72915 11.9617 5.54258 12.2938 5.21048C12.6259 4.87839 12.8125 4.42797 12.8125 3.95831C12.8125 3.48866 12.6259 3.03824 12.2938 2.70614C11.9617 2.37405 11.5113 2.18748 11.0417 2.18748C10.572 2.18748 10.1216 2.37405 9.7895 2.70614C9.4574 3.03824 9.27083 3.48866 9.27083 3.95831C9.27083 4.42797 9.4574 4.87839 9.7895 5.21048C10.1216 5.54258 10.572 5.72915 11.0417 5.72915ZM11.0417 12.8125C11.5113 12.8125 11.9617 12.6259 12.2938 12.2938C12.6259 11.9617 12.8125 11.5113 12.8125 11.0416C12.8125 10.572 12.6259 10.1216 12.2938 9.78948C11.9617 9.45738 11.5113 9.27081 11.0417 9.27081C10.572 9.27081 10.1216 9.45738 9.7895 9.78948C9.4574 10.1216 9.27083 10.572 9.27083 11.0416C9.27083 11.5113 9.4574 11.9617 9.7895 12.2938C10.1216 12.6259 10.572 12.8125 11.0417 12.8125Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                  Lorem ipsum
                </button>
              </>
            </div>
          </div>

          {/* Third Button */}
          <div class=" col-start-3 text-xs md:col-start-5 md:text-base">
            <div class=" text-[#F6F6F6] font-extrabold">
              <>
                <button class="flex flex-wrap justify-evenly items-center bg-[#0D0D0D80] bg-opacity-50 focus:border focus:border-[#F6F6F6] rounded-md px-8 py-4 w-full">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 4.83332L7.5375 0.141651C7.67444 0.0502848 7.83538 0.00152588 8 0.00152588C8.16462 0.00152588 8.32556 0.0502848 8.4625 0.141651L15.5 4.83332V16.5C15.5 16.721 15.4122 16.933 15.2559 17.0892C15.0996 17.2455 14.8877 17.3333 14.6667 17.3333H1.33333C1.11232 17.3333 0.900358 17.2455 0.744078 17.0892C0.587797 16.933 0.5 16.721 0.5 16.5V4.83332ZM2.16667 5.72498V15.6666H13.8333V5.72498L8 1.83665L2.16667 5.72498ZM8 8.16665C7.55797 8.16665 7.13405 7.99106 6.82149 7.67849C6.50893 7.36593 6.33333 6.94201 6.33333 6.49998C6.33333 6.05796 6.50893 5.63403 6.82149 5.32147C7.13405 5.00891 7.55797 4.83332 8 4.83332C8.44203 4.83332 8.86595 5.00891 9.17851 5.32147C9.49107 5.63403 9.66667 6.05796 9.66667 6.49998C9.66667 6.94201 9.49107 7.36593 9.17851 7.67849C8.86595 7.99106 8.44203 8.16665 8 8.16665Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                  Lorem ipsum
                </button>
              </>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-10 xl:grid-cols-2 md:gap-5">
          <div class=" p-5 xl:pl-60">
            <Accordion1 />
          </div>
          <div class=" p-5 xl:pr-60">
            <Accordion2 />
          </div>
          <div class="  p-5 xl:col-start-2 xl:pr-60">
            <Accordion1 />
          </div>
        </div>
      </div>
      <footer class=" z-20 bg-[#0D0D0D] relative flex justify-center h-full">
        <img src="./Assets/image 27.png" class=" p-28" />
      </footer>
    </>
  );
}
