import{useState}from "react";


export default function useCounter(initialValue){
  const [values, setValues]=useState(initialValue);
  const increment = (payload) =>{
    return setValues(values + payload);
  };
  const decrement = (payload) =>{
    return setValues(values - payload);
  };
  const reset = () =>{
    return setValues(initialValue);
  };
  return [values, increment, decrement,reset];

}