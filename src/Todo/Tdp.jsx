import React, { useState } from 'react'
import './Todos.css'

function Tdp() {
  const [Text, setText] = useState({});
  const [List, setList] = useState([]);

  const AddData = () => {

    setList([...List, Text]);
    setText({ title: "", description: "", status: "" });
  };
  const DeleteData = (id) => {
    const Del = List.filter((elem, ID) => ID !== id);
    setList([...Del]);
  };

  const ResetData = () =>{
    setList([]);
  }


  return (
    <>
      <div>Tdp</div>
      <div >
        <div>
        <input
          placeholder="title"
          type="text"
          value={Text.title}
          onChange={(e) => setText({ title: e.target.value })}
        />
        </div>
        <div>
        <input
          placeholder="description"
          type="text"
          value={Text.description}
          onChange={(e) => setText({ ...Text, description: e.target.value })}
        />
        </div>
        <div>
        <input
          placeholder="status"
          type="text"
          value={Text.status}
          onChange={(e) => setText({ ...Text, status: e.target.value })}
        />
        </div>
        <button onClick={AddData} >
          Add Data
        </button>
        <button onClick={ResetData} >
      Empty
        </button>
      </div>
      <div>
        <table border="1" style={{width:"100%"}}>
          <tr>
            <th>Tittle</th>
            <th>discription</th>
            <th>status</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
          {List.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => DeleteData(id)}>Delete</button></td>
                <td>
                  <button >Edit</button></td>
              </tr>
            );
          })}
        </table>
      </div>

    </>
  )
}

export default Tdp