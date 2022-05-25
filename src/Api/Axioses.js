import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axioses() {
    const [Get, setGet] = useState([])

    useEffect(()=>{
        GetData();
    },[])

    const GetData = () =>{
        axios.get("https://fakestoreapi.com/products").then((resp)=>{setGet(resp.data)}).catch((error) => console.log("error Found",error))
    }
    console.log("get",Get);
  return (
      <>
    <div>Axioses</div>
    {/* <button onClick={GetData}> Call Data</button> */}
    <div >
        {Get.map((item)=>{
            return(
                <div style={{display:"flex"}}>
                <div key={item.id} >
                    <div class="card"  style={{maxWidth:"30%"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.category}</h5>
    <p class="card-text">{item.description}</p>
    <a href="#" class="btn btn-primary">{item.price}</a>
  </div>
</div>
                </div>
                </div>
            )
        })}
    </div>
      </>
  )
}

export default Axioses