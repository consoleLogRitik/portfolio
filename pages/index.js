import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import ritik from "../public/Ritik_Img.jpg";
import ipl from "../public/ipl-pedia.jpg";
import eatsy from "../public/eatsy-eat.jpg";
import weather from "../public/weather-app.jpg";
import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa6";
import { TbBrandJavascript, TbBrandCpp, TbBrandTailwind } from "react-icons/tb";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Ritik Choubey, Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-mono bg-gray-300 dark:bg-gray-900 container mx-auto px-4 md:px-8 lg:px-20">
  <section className="min-h-screen w-full">
    {/* Navbar */}
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-2xl">Ritik Choubey</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl transition-transform transform hover:scale-110"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-br from-purple-600 via-gray-400 to-pink-400 text-white px-4 py-2 rounded-lg ml-8 shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>

    {/* Hero Section */}
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl font-extrabold py-2 bg-gradient-to-br from-purple-700 to-gray-200 text-transparent bg-clip-text md:text-6xl">
        Ritik Choubey
      </h2>
      <h3 className="text-xl py-2 dark:text-white md:text-3xl">
        Front-end Developer
      </h3>
      <p className="text-sm py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Seeking a challenging and rewarding opportunity to grow my coding skills and explore new technologies.
      </p>
      {/* Social Links and Profile Image */}
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        {/* Links */}
      </div>
      <div className="mx-auto bg-gradient-to-b rounded-full from-teal-500 w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 shadow-2xl hover:shadow-lg transition-shadow">
        <Image
          src={ritik}
          layout="fill"
          objectFit="cover"
          alt="Ritik Choubey"
          priority
        />
      </div>
    </div>
  </section>

        {/* Skills Section */}
        <section>
          <div>
            <h3 className="text-6xl font-extrabold py-8 dark:text-white text-center">Skills</h3>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="w-screen flex gap-4 flex-col items-center justify-between text-8xl dark:text-white lg:flex-row lg:flex-wrap">
              <FaReact className="hover:text-blue-400 transition-colors" />
              <TbBrandJavascript className="hover:text-yellow-400 transition-colors" />
              <TbBrandCpp className="hover:text-blue-600 transition-colors" />
              <TbBrandTailwind className="hover:text-teal-400 transition-colors" />
              <FaCss3 className="hover:text-blue-500 transition-colors" />
              <FaHtml5 className="hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-10">
          <div className="my-8">
            <h3 className="text-6xl font-extrabold py-1 dark:text-white text-center">Projects</h3>
          </div>

          <div className="w-full flex flex-col items-center gap-10 lg:flex-row flex-wrap justify-center font-mono">
            {/* Project Card 1 */}
            <div className="opacity-90 flex flex-col justify-between shadow-lg w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg h-96 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
              <div className="relative w-full h-40">
                <Image src={ipl} alt="IPLpedia Project Screenshot" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <h1 className="pt-8 font-semibold text-xl w-full text-center">
                IPLpedia
              </h1>
              <p className="p-4 font-mono text-gray-600 dark:text-gray-300">
                IPLpedia is a web app that deals with real-world IPL data, providing detailed team stats and performance insights.
              </p>
              <div className="bg-gradient-to-r from-lime-400 to-green-500 p-4 flex gap-2 justify-center rounded-b-lg">
                <a href="https://iplpedia.netlify.app/">
                  <button className="text-white hover:scale-105 transition-transform">Demo</button>
                </a>
                <a href="https://github.com/consoleLogRitik/IPLpedia">
                  <button className="text-white hover:scale-105 transition-transform">Source Code</button>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="opacity-90 flex flex-col justify-between shadow-lg w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg h-96 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
              <div className="relative w-full h-40">
                <Image src={eatsy} alt="Eatsy Project Screenshot" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <h1 className="pt-8 font-semibold text-xl w-full text-center">
                Eatsy
              </h1>
              <p className="p-4 font-mono text-gray-600 dark:text-gray-300">
                Eatsy is a food ordering app where you can explore restaurant menus and search for your favorite cuisines.
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 flex gap-2 justify-center rounded-b-lg">
                <a href="https://easty-eat.netlify.app/">
                  <button className="text-white hover:scale-105 transition-transform">Demo</button>
                </a>
                <a href="https://github.com/consoleLogRitik/Eatsy">
                  <button className="text-white hover:scale-105 transition-transform">Source Code</button>
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="opacity-90 flex flex-col justify-between shadow-lg w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg h-96 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
              <div className="relative w-full h-40">
                <Image src={weather} alt="Weather App Project Screenshot" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <h1 className="pt-8 font-semibold text-xl w-full text-center">
                Weather App
              </h1>
              <p className="p-4 font-mono text-gray-600 dark:text-gray-300">
                This Weather App provides real-time updates using the OpenWeather API, allowing users to check the weather in any city.
              </p>
              <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-4 flex gap-2 justify-center rounded-b-lg">
                <a href="https://consolelogritik.github.io/weatherApp/">
                  <button className="text-white hover:scale-105 transition-transform">Demo</button>
                </a>
                <a href="https://github.com/consoleLogRitik/weatherApp">
                  <button className="text-white hover:scale-105 transition-transform">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
