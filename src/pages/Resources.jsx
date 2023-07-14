import React from 'react'
import ResourceCard from '../components/ResourcesPageComponents/ResourceCard'
import SideNavBar from '../components/SideNavBar'

function Resources() {
  return (
    <div>
        <SideNavBar />
        <div class="p-4 sm:ml-64">
            <ResourceCard />
        </div>
    </div>
  )
}

export default Resources