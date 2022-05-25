import React, { useState } from 'react'

function Hoc(HigherCompo) {
    
  return (
    <div className="App">
      <h1>HOC </h1>
      <A cmp={Counter} />
      <B cmp={Counter} />
      <C cmp={Counter} />

    </div>
  );
}
function A(props)
{
  return <button >A<props.cmp /></button>
}
function B(props)
{
  return <button >B<props.cmp /></button>
}
function C(props)
{
  return <button >C <props.cmp /></button>
}
function Counter()
{
  const [count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}

export default Hoc;