import React, { useEffect } from 'react'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Settings from './pages/dashboard/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Toaster } from 'react-hot-toast'

function App() {

  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    if(token) {
      navigate('/dashboard')
    } else {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>

      <Toaster position='top-right' />
    </>
  )
}

export default React.memo(App)
