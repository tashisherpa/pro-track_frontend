import React from 'react'
import LecturesStudentView from '../components/LecturesPageComponents/LecturesStudentView'
import SideNavBar from '../components/SideNavBar'

function Lectures() {
  return (
    <div>
        <SideNavBar />
        <div class="p-4 sm:ml-64">
            <LecturesStudentView />
        </div>
    </div>
  )
}

export default Lectures