import React, { useState } from 'react'

function LocalStorage() {
    const [user, setuser] = useState('')
    const [Pass, setPass] = useState('')

    console.log("iser",user);
    const handlesubmit = (e) =>{
        e.preventDefault();
                localStorage.setItem("user", user)
                localStorage.setItem("Pass", Pass)
                sessionStorage.setItem("user",user )
                sessionStorage.setItem("Pass",Pass )
    }
    const GetData = localStorage.getItem("user")
    const GetDatas =sessionStorage.getItem("Pass")
    
  return (
      <>
    <div>LocalStorage * sessionStorage</div>
    <form onSubmit={handlesubmit}>

      <input type="username" onChange={(e)=>setuser(e.target.value)} name="username"  value={user}/>
      <input type="password"  onChange={(e)=>setPass(e.target.value)} name="password" value={Pass}/>
      <button>Submit</button>
    </form>
    <p >{GetData}</p>
    <p>{GetDatas}</p>
      </>
  )
}

export default LocalStorage