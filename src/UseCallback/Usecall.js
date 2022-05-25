import React, { useState,useMemo, useCallback, useEffect } from 'react'

function Usecall() {

//1) Memoize the function (useCallback) vs Memoize the  Value (usememo)
//2) Referential equality for a functions



    const [counter, setCounter] = useState(1);
    const result =useMemo(()=>{
        return factorial(counter);
    },[counter]) 
    
    console.log('useMemo',result);
    const [name, setName] = useState("");

    const displayname = useCallback(() =>{
        return name;
    },[name])
    console.log('useCallback',displayname);


    return (
        <>
            <div>
                <h1>Usecall</h1>
                <h1>
                    Factorial of {counter} is: <span>{result}</span>
                </h1>
                <div>
                    <button onClick={() => setCounter(counter - 1)}>Decrement</button>
                    <button onClick={() => setCounter(counter + 1)}>Increment</button>
                </div>
                <hr />
                <div>
                    <div>
                        <label>Enter Name</label>
                    </div>
                    <input
                        type="text"
                        placeholder="  Enter name"
                        value={name}
                        style={{height:25}}
                        onChange={(e) => setName(e.target.value)} />
                    <hr />
                    <TheName  displayname={displayname}/>
                </div>
            </div>
        </>
    )
}

const TheName = React.memo(({displayname}) =>{
console.log("ok rendered");
const [values, setValues] = useState('')
useEffect(() => {
  setValues(displayname());
console.log("the comp Rendered");
}, [displayname])

return <p>My Name is  : {values}</p>
});

function factorial(n) {
    let i=  0;
    while (i < 2000000) i++;
    if (n < 0) {
        return -1;
        }
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
}

export default Usecall


