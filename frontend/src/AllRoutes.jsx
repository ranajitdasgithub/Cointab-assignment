import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Userdetails from './Userdetails.jsx';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path ="/" element={<Homepage />} />
      <Route path="/userdetails" element={<Userdetails />} />
    </Routes>
  )
}

export default AllRoutes