import React, { useRef, useState } from 'react'

function RefFun() {
    const [name, setName] = useState("demo");
    const logo = useRef(null);

    const RotateImg = () =>{
        logo.current.style.transform = "rotate(25deg)";
    }
  return (
      <>
    <div style={{width:"80%",border:"1px solid black",marginLeft:"8rem",height:"30%",marginTop:"20px"}}>
    <div>RefFun</div>
<h1>Hook Based Component : {name}</h1>
<img src="logo512.png" alt=""  style={{height:"200px"}} ref={logo}/>
<button  onClick={RotateImg}>Rotate Img</button>
</div>

      </>
  )
}

export default RefFun



