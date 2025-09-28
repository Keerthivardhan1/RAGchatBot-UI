import React, { useEffect, useRef, useState } from 'react'
import Chat from './Chat';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ChatUI() {
    const [question , setQuestion ] = useState()
    const [chatHistory , setChatHistory] = useState([])
    const latestChatRef  = useRef(null)
    const navigate = useNavigate()

    const {user} = useAuth()

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    },[])


    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault(); 
            // console.log("Enter");
            e.target.value = ""
            updateChat()
        }
    }



    const handleChange = (e)=>{
        setQuestion(e.target.value)
        // console.log(question);
        

    }

    const updateChat = ()=>{
        if(question.length==0){
            return
        }
        setChatHistory([...chatHistory , question , getAnswer()])
        // console.log(chatHistory);
    }

    const getAnswer = ()=>{
        /*
            desc : API cALL
        */

        setQuestion("") // ready for next question
        return "This is sample answer"
        // return "This is an example of a form component including an email, password, checkbox, and submit button that you can use as a starting point for any form element in your website using Flowbite and Tailwind CSS."
    }

    useEffect(() => {
        // Scroll to bottom whenever chatHistory changes
        latestChatRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [chatHistory]);


  return (
    <div className='h-[80vh] flex flex-col justify-between'>
        <section 
        className=' h-[60vh] mb-1 overflow-y-auto overflow-x-hidden '
        >
            {chatHistory.map((text, ind)=>(
                <div key={ind} >
                    <Chat pos={(ind+1)%2} text={text} />
                </div>
            ))}
        <div ref={latestChatRef}/>
        </section>
        <section className=' bottom-1 flex justify-center ' >
            <input type="text" name="question" id="question" 
            className='border-4  border-black  rounded-2xl w-[80%] p-3'
            placeholder='Chat with your documents'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            
            />
        </section>
    </div>
  )
}

export default ChatUI


