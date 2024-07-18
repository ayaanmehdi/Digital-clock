// "use client"
import React, { useState } from 'react'

const ClockTime = () => {
    
    let time = new Date;

     const [ctime,setctime] = useState(time);
    
     const updatectime = ()=>{
         time = new Date;
         setctime(time)
     }
     setInterval(() => {
        updatectime()
     }, 1000);
     
    return (
      <>
      
      <div className='text-white bg-red-800 rounded-3xl w-[40%] h-40 flex items-center justify-center '><h1 className='text-4xl'>{time.toLocaleTimeString()}</h1></div>

      </>
    )
}

export default ClockTime;