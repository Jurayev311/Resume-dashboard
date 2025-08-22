import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { IoDocument, IoSettings } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

const Dashboard = () => {

  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("refreshtoken")

    navigate('/login')
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className='md:hidden sticky top-1.5 left-0 w-[30px] h-[30px] text-xl bg-[#cad5e27c] rounded-tr-xl rounded-br-xl flex items-center justify-center'><LuMenu /></button>

      <div className='flex md:h-screen'>

      {open && (
         <div
          className="fixed inset-0 bg-black/40 z-30 duration-300"
          onClick={() => setOpen(false)}
        ></div>
      )}

        <div 
        className={`
          fixed md:static top-0 left-0 h-full w-[250px] bg-slate-100 flex-col justify-between rounded-r-2xl
          transform transition-transform duration-300 z-40
          ${open ? "translate-x-0 flex" : "-translate-x-full"}
          md:translate-x-0 md:flex
        `}>

          <div>
            <div className='md:text-center text-2xl flex items-center font-bold text-start p-4 cursor-default'>
              <h2 className='flex-1'>Dashboard</h2>
              <IoCloseCircle onClick={() => setOpen(false)} className='md:hidden' />
            </div>
            <ul className='p-3 space-y-2.5'>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5"
                  to={'profile'}>
                  <FaUser /> Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="bg-slate-200 p-3 rounded-[10px] font-medium hover:bg-slate-300 duration-300 flex items-center gap-1.5"
                  to={'resume'}>
                  <IoDocument /> Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
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
              className="w-full bg-red-400 text-white hover:bg-red-500 p-3 rounded-[10px] font-medium duration-300 cursor-pointer">
              Log Out
            </button>
          </div>
        </div>

        <div className='m-5 p-5 flex-1 bg-slate-100 md:overflow-y-auto rounded-xl'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default React.memo(Dashboard)
