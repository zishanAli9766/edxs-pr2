import React from 'react'
import useScreen from './UseScreen'

function Screen() {
    const ScreenSize = useScreen();
  return (
      <>
    <div>
       <h1>Screen</h1> 
        <h2>The Screen is {ScreenSize}</h2>
        </div>
      </>
  )
}

export default Screen