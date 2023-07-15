import React from 'react'
import AddHelpRequest from './AddHelpRequest'
import { Link } from 'react-router-dom'

function HelpRequestStudentView() {
  const handleAddRequest=()=>{
    <Link to="/helprequests/addrequest"></Link>
  }

  return (
    <div className='flex justify-end mb-10'>
       <Link to="/helprequests/addrequest">Add new request</Link>
    </div>
  )
}

export default HelpRequestStudentView
