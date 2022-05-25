import React from 'react'
import Api from './Api/Api'
import Apiss from './Api/Apis'
import Axioses from './Api/Axioses'
import Noti from './FireNoti/Noti'
import Hoc from './Hoc/Hoc'
// import Material from './MaterialUi/Material'
// import Materialsui from './MaterialUi/Materialsui'
import Hooks from './RefandMemo/Hooks'
import RefFun from './RefandMemo/RefFun'
import Refsclass from './RefandMemo/Refsclass'
import Cookie from './Storage/Cookie'
import LocalStorage from './Storage/LocalStorage'
import Tdp from './Todo/Tdp'
import Todo from './Todo/Todo'
import firebase from './FireNoti/FireConfig'
import Main from './CustomHook/Main'
import Mains from './UseReducers/Mains'
import TheMain from './UseMemo/TheMain'
import UseRef from './UseRef/UseRef'
import Usecall from './UseCallback/Usecall'

function Apps() {
  

  return (
      <>
    {/* <div>Main</div> */}
    {/* <Todo /> */}
    {/* <Tdp/> */}
    {/* <Api /> */}
{/* <Axioses /> */}     
{/* <Hoc /> */}
    {/* <Apiss /> */}
    {/* <LocalStorage/> */}
    {/* <Cookie/> */}
    {/* <Refsclass />
    <RefFun /> */}
    {/* <Hooks /> */}
    {/* <Material /> */}
    {/* <Materialsui /> */}
    {/* <Noti /> */}
    <h1>Custom Hook</h1>
    <Main />
    {/* <h1>UseReducer</h1>
    <Mains /> */}
    {/* <h1>UseMemo</h1>
    <TheMain /> */}
    {/* <h1>UseRef</h1>
    <UseRef /> */}
    {/* <h1>UseCallBack</h1>
    <Usecall /> */}
      </>
  )
}

export default Apps