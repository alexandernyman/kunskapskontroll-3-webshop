import React from 'react'
import { useNavigate } from 'react-router-dom'




const Unauthorized = () => {

  const navigate = useNavigate();

  return (
    <div>
        <h1>UNAUTHORIZED</h1>
        <h2>You have to be a admin to access this page</h2>
        <button onClick={() => {
          navigate("/login")
        }}>GO BACK</button>
    </div>
  )
}

export default Unauthorized