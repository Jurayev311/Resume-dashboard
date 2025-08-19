import React from 'react'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Settings from './pages/dashboard/Settings'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default React.memo(App)
