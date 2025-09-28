import React, { useEffect } from 'react'

function Chat({pos , text}) {
    /*
        desc : chat message
        inputs :
            pos : 
                0 : reply (left side) #f4f5f4
                1 : user question (right side)   #e6e8e6
    */
//    useEffect(()=>{
//     console.log(pos , text);
    
//    },[])
  return (
    <div className={`flex  ${pos == 0 ? 'justify-start ' : 'justify-end ' } `}>
        <span className={`rounded-2xl p-3 ${ pos==1 ? 'bg-[#e6e8e6] max-w-[50%] min-w-[5%]' : 'mt-2 ' }`} >{text}</span>
    </div>
  )
}

export default Chat