import React from 'react'
import LectureCard from '../components/LecturesPageComponents/LectureCard'
import SideNavBar from '../components/SideNavBar'

function Lectures() {
  return (
    <div>
        <SideNavBar />
        <div className="p-4 sm:ml-64">
            <LectureCard />
        </div>
    </div>
  )
}

export default Lectures