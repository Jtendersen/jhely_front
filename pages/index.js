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

        {/* <img
            class=" px-6 z-30 "
            src="../Assets/Ellipse_37.png"
            alt="funny_faces.png"
          /> */}

        {/* <div class="h-full w-full flex items-center justify-center">
          <div class="z-40">
            <div class=" h-1/2 flex justify-center text-center transform translate-x-1/4 -translate-y-1/2">
              <img
                class=" object-cover h-auto "
                src="../Assets/Ellipse_37.png"
                alt="Funny_face_button"
              />
            </div>
          </div>
        </div> */}
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />

            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h2 className="text-3xl font-bold underline">
              "Los obstáculos son esas cosas espantosas que ves cuando apartas
              los ojos de tu meta" — Henry Ford
            </h2>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={styles.description}>
              Get started by editing{" "}
              <code className={styles.code}>pages/index.js</code>
            </p>

            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span className={styles.logo}>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
