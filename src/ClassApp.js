import React, { Component } from 'react'
import firebase from './FireNoti/FireConfig'
// import './firebase-messaging-sw'

export default class ClassApp extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

   async  componentDidMount  (){

        const messaging= await firebase.messaging();
        let token = await messaging.getToken()
        console.log("gettoken", token);
        messaging
           .requestPermission()
          .then(()=>{
            return messaging.getToken();})
          .then(token =>{
             console. log("token....", token)})
          .catch(error =>{
            console.logl(error);
          });
        }

  render() {
    return (
      <div>ClassApp</div>
    )
  }
}

