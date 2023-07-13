import React from 'react'
import ProfilePageView from '../components/ProfilePageComponents/ProfilePageView'
import SideNavBar from '../components/SideNavBar'

function Profile() {
  return (
    <div>
        <SideNavBar />
        <div class="p-4 sm:ml-64 content-center">
            <ProfilePageView />
        </div>
    </div>
  )
}

export default Profile