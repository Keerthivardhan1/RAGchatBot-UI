import React from 'react'
import Loader from '../components/Loader'
import Login from './Login';
import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useAuth } from '../context/AuthContext';



export default function Home() {
  const {user} = useAuth()
  return (
    <div className="flex flex-col">
      <section id="section1" className="flex flex-col  rounded-2xl p-4 m-2 w-full min-h-[80vh]  justify-center ">
        <h1 className=' font-extrabold text-8xl '>Talk With Your <br /> <span className=' text-amber-500' >Documents</span><br />Like <br /> Never Before <span  className=' text-amber-500' >.</span></h1>
        <Link to="/chat" className='p-3 text-xl w-fit rounded-2xl mt-3 font-bold bg-amber-500 text-white'>Talk With Your Documents</Link>
      </section>
      <section id="section2" className=" border rounded-2xl p-10 m-2 w-full min-h-[50vh] bg-amber-500 text-white flex flex-col gap-3 justify-center items-center">
        <h1 className=' font-extrabold text-4xl' >How we do</h1>
        <p className=' font-bold' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum itaque voluptas error consectetur commodi! Rerum laborum exercitationem deserunt dolorum amet quo officiis molestias, quibusdam cum porro architecto accusamus, sunt nulla.</p>
      </section>
      {!user && <section id="section3" className="border rounded-2xl p-4 m-2 w-full min-h-[80vh]">
        <Login/>
      </section>}
      <section id="section4" className="bg-[#262629] p-10 text-white rounded-2xl  m-2 w-full min-h-[40vh] flex flex-col gap-3 ">
        <h1 className=' font-extrabold text-6xl'>DocChat</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, quod.</p>
        <span>@Keerthivardhan Tekulapelli</span>
        <Link className='flex items-center gap-3 hover:underline' to={'https://github.com/Keerthivardhan1'} ><FaGithub/> keerthivardhan1</Link>
        <Link className='flex items-center gap-3 hover:underline' to={'https://www.linkedin.com/in/keerthi-vardhan-tekulapelli-7064a6245/'}> <FaLinkedin/>Let's Connect</Link>
        <span></span>
      </section>
    </div>
  );
}


