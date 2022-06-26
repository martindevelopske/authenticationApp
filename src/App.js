import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import SecretPage from './pages/SecretPage'
import './app.css'
function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/secret" element={<SecretPage />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App