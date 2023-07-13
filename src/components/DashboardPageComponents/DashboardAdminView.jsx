import React from 'react'

function DashboardAdminView() {
  return (
    <div>
      <form className='flex flex-col'>
        <input className="border-red-400 border-1" value="" placeholder="What are we posting"/>
        <button>Post</button>
      </form>
    </div>
  )
}

export default DashboardAdminView
