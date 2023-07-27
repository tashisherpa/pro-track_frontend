import React from "react";
import NavBar from "../components/NavBar/NavBar";
import brooklynCollege from "../images/brooklyncollege.jpeg";

function Homepage() {
  return (
    <div className= " bg-gray-800 flex-col items-center p-8 pt-20">
        <div>
      <NavBar />
      </div>
      <div className="flex  bg-gray-800 flex-col items-center p-8">
       
        <h1 className="text-center text-white text-4xl font-bold my-8">
          Introducing Pro-Track: Empowering TTP Students at Brooklyn College
        </h1>

        <div className="space-y-6 text-white max-w-3xl">
          <img
            src={brooklynCollege}
            alt="Brooklyn College"
            className="w-40 h-auto mx-auto"
          />

          <p>
            Pro-Track is an innovative application designed for students and
            instructors in the Technology Talent Pipeline (TTP) program at
            Brooklyn College. It enhances the learning experience and fosters
            better connections between students and educators. Pro-Track
            provides a seamless platform for communication and collaboration,
            streamlining assignment submissions, grades tracking, and class
            announcements.
          </p>
          <p>
            The Technology Talent Pipeline (TTP) program equips students with
            skills, knowledge, and real-world experience to excel in tech
            fields. With industry-driven curriculum and partnerships with
            leading tech companies, students gain a competitive edge in the job
            market. TTP prepares students for success in the rapidly evolving
            tech industry, setting them on a path to excellence upon graduation.
          </p>
          <p>
            Pro-Track serves as the ultimate hub for students and instructors to
            interact and engage in a dynamic learning environment. Like Google
            Classroom, it streamlines the exchange of information and resources,
            making the learning process efficient. Students can easily
            collaborate on group projects, fostering teamwork and enhancing
            communication. Instructors provide real-time feedback, helping
            students refine their skills and excel in their coursework. The app
            utilizes smart algorithms to analyze individual learning patterns,
            enabling personalized teaching approaches for maximizing potential.
          </p>
        </div>
      </div>
      

      <footer className="bg-gray-800 py-4 m-10 text-gray-400 text-center">
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

