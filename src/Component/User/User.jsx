import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}= useParams()
  return (
    <div className='bg-gray-600 text-3xl text-white p-4 -tracking-tighter'>
            User:{userid}
    </div>
  )
}

export default User
