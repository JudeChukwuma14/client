import { FaMoon } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import cv from "./assets/Jude Chukwuma CV.pdf";
import dev from "./assets/dev-ed-wave.png";
import full from "./assets/full.webp";
import frontend from './assets/frontend.png'
import bEnd from './assets/bend.png'
import dbase from './assets/dtbase.png'
import ui from './assets/ui.png'
import api from './assets/api.png'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" bg-white px-10 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className=" flex justify-between py-7 items-center">
            <h2 className=" text-xl font-semibold dark:text-teal-50">
              DEVELOPEDBYJUDE
            </h2>
            <div className=" flex gap-2 items-center">
              <FaMoon
                onClick={() => setDarkMode(!darkMode)}
                className=" text-3xl cursor-pointer dark:text-teal-100"
              />
              <a
                className=" rounded-md py-2 px-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white cursor-pointer"
                href={cv}
                download="resume"
              >
                Resume
              </a>
            </div>
          </nav>
          <diV className=" text-center p-10">
            <h2 className=" text-4xl text-teal-600 font-medium  md:text-6xl">
              Jude Chukwuma
            </h2>
            <h3 className=" text-xl font-bold py-2 dark:text-white">
              Developer and Designer
            </h3>
            <p className=" leading-8 text-gray-600 py-5 text-lg md:text-xl dark:text-white">
              Freelancer providing service for programing needs. Join me down
              below and let's get cracking
            </p>
          </diV>
          <div className=" text-4xl flex gap-6 text-gray-600 justify-center py-4 md:text-5xl dark:text-white">
            <a href="https://github.com/JudeChukwuma14">
              <FaGithub />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100073956181612">
              <FaFacebook className=" cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/jude_chukwuma14/?hl=en"><FaInstagram /></a>
            <FaLinkedinIn />
            <FaWhatsapp />
          </div>
          <div className=" flex justify-center py-8">
            <div className=" relative bg-gradient-to-b from-teal-500 h-80 w-80 rounded-full overflow-hidden flex items-center md:w-96 md:h-96">
              <img
                src={dev}
                className=" object-cover w-[300px] h-[300px] md:w-[380px] md:h-[380px]"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className=" text-3xl py-3 font-medium dark:text-teal-500">SERVICE I OFFER</h2>
            <p className=" leading-6 text-gray-600 py-1 dark:text-white">
              Since the beginning of my journey as a freelancer desinger and
              developer, i've done remote work for{" "}
              <span className=" text-teal-500">agenices</span> consulted for{" "}
              <span className=" text-teal-500">startup</span> and collaborated
              with talanted people to created digital product for both business
              and consumer use
            </p>
            <p className=" leading-6 text-gray-600 py-1 dark:text-white">
              I offer from a wide range service, inculding brand design
              programming and teaching
            </p>
          </div>
          <div className=" py-8 shadow-lg text-center rounded-xl my-10 dark:bg-white">
            <div className=" flex justify-center items-center">
              <img src={full} className=" w-20 h-20" />
            </div>
            <h3 className=" text-lg pt-2 pb-2 font-medium">
              Full Stack Development
            </h3>
            <p className=" py-2 px-2">
              Harness the power of (MongoDB, Express.js, React.js, and Node.js)
              to build scalable and efficient web applications. From concept to
              execution, I cover every stage of development with utmost
              creativity.
            </p>
          </div>
          <div className=" py-8 shadow-lg text-center rounded-xl my-10 dark:bg-white">
            <div className=" flex justify-center items-center">
              <img src={frontend} className=" w-20 h-20" />
            </div>
            <h3 className=" text-lg pt-2 pb-2 font-medium">
              Frontend Development
            </h3>
            <p className=" py-2 px-2">
              Leverage the potential of React.js to develop interactive and
              visually stunning user interfaces. I implement the best practices
              in frontend development to create responsive, mobile-friendly, and
              user-centric designs.
            </p>
          </div>
          <div className=" py-8 shadow-lg text-center rounded-xl my-10 dark:bg-white">
            <div className=" flex justify-center items-center">
              <img src={bEnd} className=" w-20 h-20" />
            </div>
            <h3 className=" text-lg pt-2 pb-2 font-medium">
              Backend Development
            </h3>
            <p className=" py-2 px-2">
              I excel in building scalable and secure backend systems using
              Node.js and Express.js. With a strong focus on performance and
              data integrity, I ensure your application runs smoothly even under
              heavy traffic.
            </p>
          </div>
          <div className=" py-8 shadow-lg text-center rounded-xl my-10 dark:bg-white">
            <div className=" flex justify-center items-center">
              <img src={dbase} className=" w-20 h-20" />
            </div>
            <h3 className=" text-lg pt-2 pb-2 font-medium">
              Database Management
            </h3>
            <p className=" py-2 px-2">
              Harness the power of MongoDB's NoSQL database to handle large
              volumes of data efficiently. From database design to migration and
              maintenance, I guarantee optimal data organization and retrieval.
            </p>
          </div>
          <div className=" py-8 shadow-lg text-center rounded-xl my-10 dark:bg-white">
            <div className=" flex justify-center items-center">
              <img src={api} className=" w-20 h-20" />
            </div>
            <h3 className=" text-lg pt-2 pb-2 font-medium">API Development</h3>
            <p className=" py-2 px-2">
              Enable seamless communication between your frontend and backend
              with robust RESTful APIs. I design and implement APIs that
              facilitate smooth data flow and integration with other services.
            </p>
          </div>
          <div className=" py-8 shadow-lg text-center rounded-xl my-10 dark:bg-white">
            <div className=" flex justify-center items-center">
              <img src={ui} className=" w-20 h-20" />
            </div>
            <h3 className=" text-lg pt-2 pb-2 font-medium">UI/UX</h3>
            <p className=" py-2 px-2">
              I use tools like Figma to create wireframes and interactive
              prototypes, allowing me to visualize and iterate on the design
              before starting the development phase. I have an eye to create
              appealing user interface.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
