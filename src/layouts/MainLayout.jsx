import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';  
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavbar from '../components/sideNavBar';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { AiFillHome } from "react-icons/ai";
import { IoChatbox } from "react-icons/io5";
import { FaUpload } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";




function MainLayout() {  
  const {user, login , logout} = useAuth()
  useEffect(()=>{
    console.log('user', user);
  },[])
  const [open , setIsOpen]= useState(false)

  // useEffect(() => {
  //   const isMobile = window.innerWidth <= 768; 
  //   setIsOpen(!isMobile); 
  // }, []);

  const handleMenu = (e)=>{
    setIsOpen(open?false:true)
  }
  const handleLogout = (e)=>{
    if(user){
      logout()
    }
  }
  return (
    <div className="transition-all duration-2000 flex p-2 gap-3">
      {/* Sidebar */}
      <aside className={`
        fixed left-4 top-2 bottom-2 /* sits below header */
        ${open ? 'w-64' : 'w-20'}
        border rounded-2xl
        bg-white/70 backdrop-blur-md
        p-2
      `}>
        <nav className={`space-y-4 flex flex-col gap-2 ${!open ? 'items-center' : ''}`}>
          <button onClick={handleMenu}><CgMenuRight/></button>
          <Link to="/" className="hover:underline flex gap-2 items-center"><AiFillHome/> {open ? 'Home' : ''} </Link>
          {/* <Link to="/#section2" className="hover:underline flex gap-2 items-center">{user ? <TbLogout2/> : <IoLogIn/>} {user ? 'Logout' : 'Login'}</Link> */}
          <a href="#section3" onClick={handleLogout} className="hover:underline flex gap-2 items-center">{user ? <TbLogout2/> : <IoLogIn/>} {open ? (user ? 'Logout' : 'Login') : ''}  </a>
          {user && <Link to="#section3" className="hover:underline flex gap-2 items-center"> <FaUpload/> {open ? 'Upload docs' : ''}</Link> }
          {user &&  <Link to="/chat" className="hover:underline flex gap-2 items-center"><IoChatbox/> {open ? 'Chat with your docs' : ''} </Link>}
       
        </nav>
      </aside>

      <div className={`flex-1 ${open ? 'ml-64' : 'ml-20'}  `}>
        <header className={`
          fixed top-0 ${open?'left-70' :'left-25'} right-0
          h-[4.5rem]
          
          bg-white/70 backdrop-blur-md
          flex items-center justify-between
          
          px-6
          z-10
        `}>
          <h1 className="text-xl font-semibold">DocChat</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Link A</a>
            <a href="#" className="hover:underline">Link B</a>
          </nav>
        </header>

        <main className="pt-[4.5rem]  px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );

}

export default MainLayout;
