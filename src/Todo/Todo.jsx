import React, { useState } from 'react'

function Todo() {
     const [text,setText] = useState({});
     const [List,setList] = useState([]);
     const [edit, setEdite] = useState(true);
     const [isEdit, setIsEdit] = useState(null)
   
     console.log("text",text);
     const handleadd = () =>{
         if(!text){

         }else if(text && !edit){
             setList(
                 List.map((item)=>{
                     if(item === isEdit){
                         return {...item,
                       title:text.title,
                      description: text.description,
                    status : text.status,}
                     }
                     return item;
                 })
             )
             setEdite(true);
             setText({title : "", description: "",status: ""});
             setIsEdit(null)
         }else{
            setList([...List,text]);
            setText({title : "", description: "",status: ""});
        }
     }
   
    const handledelete = (id) =>{
  const del = List.filter((item,i) => i !== id);
  setList([...del])
    }

    const handleEdit = (item) =>{
        let newEditItem = List.find((items) =>{
            return items === item;
        });
        setEdite(false);
        setText(newEditItem);
        console.log("newedititem",newEditItem);
        setIsEdit(item);
    }
     

  return (
      <>
    <div>Todo</div>
    <div className="container1">
    
     <div>
     <div>
        <input
          className="inp"
          placeholder="titile"
          type="text"
          name='title'
          value={text.title}
          onChange={(e)=> setText({
            ...text,
              title: e.target.value
          })}
          />
          </div>
        <div>
        <input
          className="inp"
          placeholder="description"
          type="text"
          name='description'
          value={text.description}
          onChange={(e)=> setText({
            ...text,
            description: e.target.value
        })}
          />
          </div>
        <div>
        <input
          className="inp"
          placeholder="status"
          type="text"
          name='status'
          value={text.status}
          onChange={(e)=> setText({
            ...text,
            status: e.target.value
        })}
          />
          </div>
          <button onClick={handleadd}> Add</button>
          {/* {
            edit ? <button style={{ marginLeft: 30 }} onClick={handleadd}>Add</button> : <button onClick={handleadd}>Edit</button>
            } */}
     </div>

        <div>
            <table border="1" style={{width:"100%"}}>
                <tr >
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    List.map((data,id)=>{
                        return(
                            <tr key={id}>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.status}</td>
                                <td><button onClick={()=>handledelete(id)}> Delete</button></td>
                                <td><button onClick={()=>handleEdit(data)}>Edits</button></td>

                            </tr>
                        )
                    })
                }
            </table>
        </div>

      </div>
      </>
  )
}

export default Todo