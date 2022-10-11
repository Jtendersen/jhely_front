import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div class="relative">
        <div class="relative z-20 border-none h-[6px] bg-gradient-to-r from-[#665AEF] to-[#FC364C]"></div>

        <div class="absolute z-10 -top-16 left-1/4 max-w-full h-[1307px] w-3/4 bg-gradient-to-bl from-[#181818] via-[#3A273F] to-[#2e2d66] "></div>

        <div class="bg-[#0D0D0D] ">
          <img
            class=" rounded-xl py-10 px-6 relative z-30"
            src="../Assets/image_125.png"
            alt="funny_faces.png"
          />
        </div>

        <div class="grid grid-cols-7">
          <div class="col-start-4 col-span-1 z-40 transform -translate-y-2/3">
            <Image
              src={"/Assets/Ellipse_37.png"}
              width={"100%"}
              height={"100%"}
              layout={"responsive"}
            />
          </div>
        </div>

        <div class="absolute z-10 -top-16 left-1/4 max-w-full h-[1307px] w-3/4 bg-gradient-to-bl from-[#181818] via-[#3A273F] to-[#2e2d66] "></div>
      </div>
    </>
  );
}
