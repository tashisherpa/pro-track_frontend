import React from 'react'

function DashboardStudentView() {
  return (
    <div className=" rounded-lg overflow-hidden shadow-xl">
        <div className="px-6 py-4">
            <span>Allan</span>
            <div className="font-bold text-2xl mb-2">Announcement Title</div>
            <p className="text-gray-500 text-xs">
             07/07/2023
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <p>Content</p>
        </div>
    </div>
  )
}

export default DashboardStudentView
