import React from 'react'
import ProfileCard from '../components/ProfilePageComponents/ProfileCard'
import SideNavBar from '../components/SideNavBar'

function Profile() {
  return (
    <div className = "bg-gray-700 h-screen ">
        <SideNavBar />
        <div className="p-4 sm:ml-64 content-center">
            <ProfileCard />
        </div>
    </div>
  )
}

export default Profile