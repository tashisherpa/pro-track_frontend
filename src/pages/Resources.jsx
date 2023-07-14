import React from 'react'
import ResourcesStudentView from '../components/ResourcesPageComponents/ResourcesStudentView'
import SideNavBar from '../components/SideNavBar'

function Resources() {
  return (
    <div>
        <SideNavBar />
        <div class="p-4 sm:ml-64">
            <ResourcesStudentView />
        </div>
    </div>
  )
}

export default Resources