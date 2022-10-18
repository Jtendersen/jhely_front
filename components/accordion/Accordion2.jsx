import React, { useState } from "react";

const Accordion2 = () => {
  const [show, setShow] = useState("false");

  const handleChange = function () {
    setShow(!show);
  };

  return (
    <>
      <div className="relative">
        <h2 id="accordion-example-heading-1">
          <button
            type="button"
            class="flex items-center w-full p-5 justify-between font-extrabold font-Manrope bg-[#0D0D0D80] bg-opacity-50 text-left text-white rounded-t focus:ring-[#0D0D0D80]"
            aria-expanded="true"
            aria-controls="accordion-example-body-1"
            onClick={handleChange}
          >
            <div className="flex flex-wrap items-center">
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
              <span className="mr-1">Lorem ipsum </span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 12.75C3.04813 12.75 0.25 9.95187 0.25 6.5C0.25 3.04813 3.04813 0.25 6.5 0.25C9.95187 0.25 12.75 3.04813 12.75 6.5C12.75 9.95187 9.95187 12.75 6.5 12.75ZM6.5 11.5C7.82608 11.5 9.09785 10.9732 10.0355 10.0355C10.9732 9.09785 11.5 7.82608 11.5 6.5C11.5 5.17392 10.9732 3.90215 10.0355 2.96447C9.09785 2.02678 7.82608 1.5 6.5 1.5C5.17392 1.5 3.90215 2.02678 2.96447 2.96447C2.02678 3.90215 1.5 5.17392 1.5 6.5C1.5 7.82608 2.02678 9.09785 2.96447 10.0355C3.90215 10.9732 5.17392 11.5 6.5 11.5ZM5.875 8.375H7.125V9.625H5.875V8.375ZM7.125 7.34687V7.75H5.875V6.8125C5.875 6.64674 5.94085 6.48777 6.05806 6.37056C6.17527 6.25335 6.33424 6.1875 6.5 6.1875C6.67755 6.18749 6.85144 6.13706 7.00145 6.04208C7.15146 5.9471 7.27142 5.81148 7.34736 5.65099C7.4233 5.4905 7.45211 5.31175 7.43043 5.13553C7.40875 4.95931 7.33747 4.79287 7.2249 4.65557C7.11232 4.51827 6.96307 4.41577 6.79451 4.35998C6.62596 4.30419 6.44502 4.29742 6.27277 4.34044C6.10051 4.38346 5.94401 4.47452 5.82148 4.60301C5.69895 4.7315 5.61542 4.89215 5.58063 5.06625L4.35438 4.82062C4.4304 4.44068 4.60594 4.08773 4.86308 3.79787C5.12021 3.508 5.4497 3.29161 5.81787 3.17083C6.18604 3.05004 6.57968 3.02918 6.95855 3.11038C7.33742 3.19159 7.68794 3.37195 7.97426 3.63302C8.26059 3.89408 8.47245 4.2265 8.58819 4.59629C8.70394 4.96608 8.71942 5.35997 8.63304 5.73769C8.54666 6.11542 8.36153 6.46344 8.09658 6.74616C7.83162 7.02889 7.49633 7.23619 7.125 7.34687Z"
                  fill="#A2A2A2"
                />
              </svg>
            </div>

            <div>
              <svg
                data-accordion-icon
                class={
                  show ? "w-6 h-6 rotate-180 shrink-0" : "w-6 h-6 shrink-0"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </h2>
        <div
          id="accordion-example-body-1"
          class={show ? "block rounded-b" : "hidden"}
          aria-labelledby="accordion-example-heading-1"
        >
          <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto p-2 font-Manrope bg-[#0D0D0D80] lg:px-5">
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D] ">
                <div className="text-xs text-[#8E8B8F]">Accessories & Ears</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">9%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Arms</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">15%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Background</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">2%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Eye</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">32%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Glasses</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">3%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Hair & Hats</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">2%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Head</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">92%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Leg & Clothes</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">2%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Mouth</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">46%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Accessories & Ears</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">9%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Accessories & Ears</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">9%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Accessories & Ears</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">9%</div>
              </div>
            </button>
            <button className="focus:border focus:border-[#FC364C] focus:rounded">
              <div className="grid grid-rows-3 justify-center items-center text-center font-Manrope  rounded bg-[#0D0D0D]">
                <div className="text-xs text-[#8E8B8F]">Accessories & Ears</div>
                <div className=" text-base font-extrabold text-[#F6F6F6]">
                  Lorem ipsum
                </div>
                <div className="text-xs text-[#8E8B8F]">9%</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion2;
