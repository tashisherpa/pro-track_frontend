import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Typewriter from "../components/Typewriter/Typewriter";
import dashboard from "../images/dashboard.png";
import helprequest from "../images/helprequest.png";
import protrack from "../images/protrack.gif";
import lectures from "../images/lectures.png";
import logowhite from "../images/logowhite.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
   
    <div className = " relative">
        <div className="navbar-container relative z-50">
        <NavBar />
    </div>
    <div className="bg-gray-700  relative flex-col items-center p-8 pt-20">
      
      <div className="flex flex-col md:flex-row bg-gray-700 items-center p-8">
        <div className="bg-gray-700 md:w-1/2 p-4">
          <img src={protrack} alt="logo" className="h-100 w-200" />
        </div>
        <div className="relative md:w-1/2 p-4">
          <h1 className="text-left font-serif text-white text-4xl font-bold my-8">
            <Typewriter text="The help you need to stay on track" delay={20} />
          </h1>
          <div className=" font-mono space-y-6 text-white max-w-3xl">
            <Typewriter
              text="Pro-Track is a cutting-edge educational application designed to bridge the gap between students and teachers, fostering a seamless and interactive learning experience. With a focus on efficiency and ease of use, Pro-Track empowers educational institutions to revolutionize their coursework delivery and communication methods"
              delay={30}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-gray-600 h-screen items-center p-8">
        
       
        <div className="relative  text-white md:w-1/2 p-4">
          {/* <img src={dashboard} alt="logo"  className="absolute top-1/2 left-1/2    h-100 w-1500 " /> */}
          <div className="absolute top-[-200px] text-lg left-[-10px] left-1/2 transform -translate-x-2/20 -translate-y-6/4">
            <Typewriter
              text="Experience the future of learning with our ProTrack. Elevate your educational journey with real-time progress tracking, personalized study tools, and dynamic collaboration features. Unleash your full potential and embark on a seamless quest for excellence today <span className='text-lg'>ProTrack</span>."
              delay={20}
            />
         
          </div>
          <img
            src={lectures}
            alt="Image 3"
            className="absolute  top-1/2 left-1/2 transform -translate-x-2/20 -translate-y-5/4 h-100 w-1500 "
          />
        </div>
        <div className="md:w-1/2 p-4">
          <img src={helprequest} alt="Second Image" className="w-full h-full" />
        </div>
      </div>

      <div>
        <button></button>

        <button></button>
      </div>

      <footer class="bg-blue-900 sticky dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <a href="#">
              <img class="w-auto h-7" src={logowhite} alt="" />
            </a>

            <p class="max-w-md mx-auto mt-4 text-gray-300 dark:text-gray-400">
              Embrace the Support that Fuels Your Journey to Success
            </p>

            <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <svg
                  class="w-5 h-5 mx-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span class="mx-1">View Demo</span>
              </button>

              <Link to="/signup">
                <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Get started
                </button>
              </Link>
            </div>
          </div>

          <hr class="my-10 border-gray-300 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-300">
              © Copyright 2025. Were in the future catch up. All Rights
              Reserved.
            </p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Teams{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Homepage;
