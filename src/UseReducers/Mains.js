import React, { useReducer, useState } from 'react'


const initialState = [{ id: Date.now(), name: 'zishan', email: 'ali@gmail.com' }];


const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state,action.payload];
        case 'delete':
            return state.filter((contact)=>{
                return contact.id !== action.payload.id;
            });
        default: return state
    }
}

function Mains() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')


    const addContact =(e) =>{
        e.preventDefault();
        const contact={
          id: Date.now(),
          name,
          email,
        };
        setName ("");
        setEmail("");
        dispatch({ type: "add", payload: contact });
    };
    return (
        <>
            <div>
                <h1>UseReducer Hook</h1>
                <form onSubmit={addContact}>
                    <input style={{height:20,border: "none"}}
                        type="text"
                        placeholder="name"
                        value={name} required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input style={{height:20,border: "none"}}
                    type="email"
                    placeholder="Email"
                    value={email} required
                    onChange={(e) => setEmail(e.target.value)}/>
                    <div>
                        <button type='submit'>Add Details</button>
                    </div>
                </form>
                
                <div>
                    <ul>
                        {state.map((contact) =>{
                            return(
                                <li key={contact.id}>
                                    <h2>{contact.name}</h2>
                                    <h2>{contact.email}</h2>
                                    <div>
                                        <button onClick={()=>dispatch({type:"delete",payload :{id:contact.id}})}>Delete</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Mains













// const reducer = (state,action) =>{
// switch (action.type){
//     case 'increment' :
//         return state + 1;
//     case 'decrement' : 
//     return state - 1;
//     default : return state
// }
