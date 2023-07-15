import React from "react";
import { useState } from "react";

function LectureCard() {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">Lecture Name</div>
        <p className="text-gray-500 text-xs">07/07/2023</p>
      </div>
      <div className="flex justify-start px-6 pt-4 pb-2">
        <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2 mr-2 mb-2">
          Recording
        </button>
        <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          Slides
        </button>
        {
          /*Only visible to TA/Admins */
          isAdmin ? (
            <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16">
              Edit
            </button>
          ) : null
        }
      </div>
    </div>
  );
}

export default LectureCard;
