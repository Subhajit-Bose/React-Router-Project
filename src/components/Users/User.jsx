import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams();
  return (
    <div className='bg-gray-900 text-white text-center px-5 py-2'>
        User : {userId}
    </div>
)}

export default User