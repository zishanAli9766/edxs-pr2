import React, { useState } from 'react'
import Screen from './Screen'
import useCounter from './UseCounter'

function Main() {
const [counter,increment,decrement,reset] = useCounter(0)

   
    return (
        <>
        <div>
            <h1>Custom Hook example</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={()=>increment(1)}>Increment</button>
                <button onClick={()=>decrement(2)}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>
                <Screen />
            </div>
        </div>
        </>
    )
}

export default Main