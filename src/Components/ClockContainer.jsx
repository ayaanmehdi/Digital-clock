import React from 'react'
import ClockPara from './ClockPara'
import ClockTime from './clockTime'
import Clockdate from './clockdate'

const ClockContainer = () => {
  var dateindia = new Date();
  return (
    <>
    <div className='flex flex-col gap-36 justify-center rounded-2xl p-10 w-[50%] h-[70%] bg-slate-300'>
    <ClockPara></ClockPara>

    <div className='flex w-full justify-between'>
    <Clockdate></Clockdate>

    <ClockTime/>
    </div>
    </div>
    </>
  )
}

export default ClockContainer