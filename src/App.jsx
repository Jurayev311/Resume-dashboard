import React, { useEffect } from 'react'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Settings from './pages/dashboard/Settings'
import Profile from './pages/dashboard/Profile'
import Resume from './pages/dashboard/Resume'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Toaster } from 'react-hot-toast'
import NotFound from './components/notFound/NotFound'

function App() {

  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (token) {
      if (currentPath === '/' || currentPath === '/dashboard') {
        navigate("/dashboard/profile");
      }
    } else {
      if (currentPath !== '/') {
        navigate('/');
      }
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='resume' element={<Resume />} />
          <Route path='settings' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      <Toaster position='top-right' />
    </>
  )
}

export default React.memo(App)
