import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Style/Homepage.css"
import axios from "axios"

const Homepage = () => {
  const navigate=useNavigate()
  const [data,setData]=useState([])
  
    const handleFetch=()=>{
      axios.get("http://localhost:8080/userfetch")
      .then((respo)=>{
            //console.log(respo.data)
            setData(respo.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    console.log(data)
    const handleDelete=()=>{

    }
    const handleUser=()=>{
       navigate("/userdetails")
    }
  return (
    <div id='Container'>
        <button onClick={handleFetch}>Fetch Users</button>
        <button onClick={handleDelete}>Delete Users</button>
        <button onClick={handleUser}>User Details</button>
    </div>
  )
}

export default Homepage