import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

const [name, setName]=useState("");
const [counter, setCounter]=useState(0);
const inputEl  =  useRef(""); 
const previousCounterRef=useRef("");
console.log(inputEl);
                                 
                 
const resetInput=() =>{
  setName ("");
  inputEl.current.focus();
  console.log(inputEl.current.value);
  inputEl.current.value ="Zishan"; 
};

useEffect(() =>{
    previousCounterRef.current = counter; 
  }, [counter]);

  return (
      <>
    <div>UseRef</div>
    <div>
  <input
    ref={inputEl}
    name="name"
    autoComplete="off"
    type="text"
    value={name}
    style={{height:25}}
    onChange={(e) => setName(e.target.value)}/>
  <button onClick={resetInput}>Reset</button>
</div>
<div>My name is {name}</div>
<div>
  <h1>Random Counter:{counter}</h1>
  {typeof previousCounterRef.current !== "undefined" &&(
    <h2>Previous Counter:{previousCounterRef.current}</h2>
  )}
   <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
    Generate Number
  </button>
</div>

      </>
  )
}

export default UseRef