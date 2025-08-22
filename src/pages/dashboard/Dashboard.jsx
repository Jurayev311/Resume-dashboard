import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { IoDocument, IoSettings } from "react-icons/io5";

const Dashboard = () => {

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("refreshtoken")

    navigate('/login')
  }

  return (
    <div className='flex'>
      <div className='w-[250px] min-h-screen bg-slate-100 flex flex-col justify-between rounded-2xl'>
        
        <div>
          <div className='text-2xl font-bold text-center p-4 cursor-default'>
            <h2>Dashboard</h2>
          </div>
          <ul className='p-3 space-y-2.5'>
            <li>
              <NavLink 
                className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5" 
                to={'profile'}>
                <FaUser /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5" 
                to={'resume'}>
                <IoDocument /> Resume
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5" 
                to={'settings'}>
                <IoSettings /> Settings
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='p-3'>
          <button 
            onClick={handleLogOut}
            className="w-full bg-red-400 text-white hover:bg-red-500 p-3 rounded-[10px] font-medium duration-300">
            Log Out
          </button>
        </div>
      </div>

      <div className='m-5 p-5 flex-1 bg-slate-100 rounded-xl'>
        <Outlet />
      </div>
    </div>
  )
}

export default React.memo(Dashboard)
