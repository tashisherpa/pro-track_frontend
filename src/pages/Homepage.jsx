import React from "react";
import NavBar from "../components/NavBar/NavBar";
import brooklynCollege from "../images/brooklyncollege.jpeg";
import Typewriter from '../components/Typewriter/Typewriter';

function Homepage() {
  return (
    <div className= " bg-gray-800 flex-col  items-center p-8 pt-20">
        <div>
      <NavBar />
      </div>
      <div className="flex  bg-gray-800 h-screen flex-col items-center p-8">
       
        <h1 className="text-left font-serif text-white text-4xl font-bold my-8">
        <Typewriter text = "The help you need to stay on track" delay = {100}/>
        </h1>

        <div className="space-y-6 text-white max-w-3xl">
            <p> 
               
                </p>

         
        </div>
      </div>
      

      <footer className="bg-gray-800 sticky py-4 m-10 text-gray-400 text-center">
        <div className="container mx-auto">
          <p className="text-sm">
            © 2023 All rights reserved. Design, Code, and Ship!
          </p>
        </div>
      </footer>
    </div>
    
  );
}

export default Homepage;

