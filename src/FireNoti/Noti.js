import React from 'react'
import firebase from './FireConfig'

function Noti() {
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
 

  return (
      <>
    <div>Noti</div>
      </>
  )
}

export default Noti


