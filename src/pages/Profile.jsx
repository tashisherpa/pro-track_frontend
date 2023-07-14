import React from 'react'
import ProfileCard from '../components/ProfilePageComponents/ProfileCard'
import SideNavBar from '../components/SideNavBar'

function Profile() {
  return (
    <div>
        <SideNavBar />
        <div class="p-4 sm:ml-64 content-center">
            <ProfileCard />
        </div>
    </div>
  )
}

export default Profile