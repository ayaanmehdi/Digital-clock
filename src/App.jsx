import React from 'react'
import ClockHeading from './Components/ClockHeading'
import ClockContainer from './Components/ClockContainer'
import ClockPara from './Components/ClockPara'
const App = () => {
  return (
    <>

    <div className="main h-screen w-full bg-black text-white text-center p-8 flex  items-center justify-center flex-col gap-5">

    <ClockHeading/>
    <ClockContainer>
     
    </ClockContainer>
    

</div>

    </>
  )
}

export default App;