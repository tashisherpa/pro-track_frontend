import React from "react";
import AddLectureBtn from "../components/LecturesPageComponents/AddLectureBtn";
import LectureCard from "../components/LecturesPageComponents/LectureCard";
import SideNavBar from "../components/SideNavBar";

function Lectures() {
  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold mb-4">Lectures</h1>
        <AddLectureBtn />
        <LectureCard />
      </div>
    </div>
  );
}

export default Lectures;
