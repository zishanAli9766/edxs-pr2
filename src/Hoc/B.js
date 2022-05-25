import React from 'react'
import Hoc from './Hoc';

function B(props) {
    const {Count,Increment} = props;
  return (
      <>
    <div>B</div>
    <button onMouseOver={Increment}>{Count}</button>
      </>
  )
}

export default Hoc(B);