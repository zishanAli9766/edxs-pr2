import React from 'react'
import Hoc from './Hoc'

function A(props) {
    const {Count,Increment} = props;
  return (
      <> 
    <div>A</div>
    <button onClick={Increment}>{Count}</button>
      </>
  )
}

export default Hoc(A)


const A = ({Count,Increment}) =>{
    return(
        <div>
            <button onClick={Increment}>{Count}</button>
        </div>
    )
}