import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const [pageState, setPageState] = useState("Sign in")
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        setPageState("Profile")
      } else {
        setPageState("Sign in")
      }
    })
  }, [auth])
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/2603/2603710.png" alt="logo" className='cursor-pointer h-9 w-9' onClick={() => navigate("/")} />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${pathMatchRoute("/") ? "text-black border-b-red-500" : "border-b-transparent"}`} onClick={() => navigate("/")}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "border-b-transparent"}`} onClick={() => navigate("/offers")}>Offers</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${pathMatchRoute("/sign-in") || pathMatchRoute("/profile") ? "text-black border-b-red-500" : "border-b-transparent"}`} onClick={() => navigate("/profile")}>{pageState}</li>
          </ul>
        </div>
      </header>
    </div>
  )
}