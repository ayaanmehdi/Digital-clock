import React from 'react'

const Clockdate = () => {
    
    
        var dateindia = new Date;
    
  return (
    <>
    
    <div className='text-white bg-blue-900 rounded-3xl w-[40%] h-40 flex items-center justify-center '><h1 className='text-4xl'>{dateindia.toLocaleDateString()}</h1></div>
    </>
  )
}

export default Clockdate;