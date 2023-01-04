import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import  AllSongs  from '../Pages/AllSongs'
import  MyChart  from '../Pages/MyChart'


const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <Routes>
            <Route path="/" element={<AllSongs/>}/>
            <Route path="/my-chart" element={<MyChart/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Main