import React, { useState,useMemo } from 'react'

function TheMain() {
    const [counter, setCounter] = useState(1);
    const result =useMemo(()=>{
        return factorial(counter);
    },[counter]) 
    
    
    const [name, setName] = useState("");



    return (
        <>
            <div>
                <h1>TheMain</h1>
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
                    {/* <p>{`My name is ${name}`}</p> */}
                    <hr />
                    <TheName  name={name}/>
                </div>
            </div>
        </>
    )
}

const TheName = React.memo(({name}) =>{
console.log("ok rendered");
return <p>My Name is{name}</p>
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

export default TheMain



















// function factorial(n) {
//     if (n < 0) {
//         return -1;
//         }
//         if (n === 0) {
//             return 1;
//         }
//         return n * factorial(n - 1);
// }