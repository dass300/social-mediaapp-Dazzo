import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/Profile/Profile'


function App() {
  return (

    <BrowserRouter>
     <Routes>

     <Route exact path="/" element={<Home/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="register" element={<Register/>}/>
     <Route path="profile/:username" element={<Profile/>}/>
        

        

        </Routes>
    </BrowserRouter>
    
  )
}

export default App