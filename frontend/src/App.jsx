
import React from 'react'
import './App.css'
import Homepage from "./pages/Homepage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Routes } from 'react-router-dom';

import {BrowserRouter as Router, Route } from 'react-router-dom'

function App() {


  return (
<Router>
  <Routes>
  <Route path="/homepage" element={<Homepage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  </Routes>
</Router>
  
  )
}

export default App
