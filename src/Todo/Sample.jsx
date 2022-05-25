import React, { useState } from "react";
import './Tod.css'


const Todo = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [edit, setEdite] = useState(true);
    const [isEdit, setIsEdit] = useState(null)

    const handelChange = (e) => {
        setText(e.target.value)
    }

    const handelAdd = (e) => {
        if (!text) {

        } else if (text && !edit) {
            setList(
                list.map((item) => {
                    if (item === isEdit) {
                        return { ...item, tittle:text }
                    }
                    return item;
                })
            )
            setEdite(true);
            setText('');
            setIsEdit(null);
        }
        else {
            setList([...list, {
                tittle: text,
                // id: new Date().getTime().toString(),
                id : Date.now(),
            }])
            setText("");
            console.log(list,"list add fun");

        }
    }
    const handelDelete = (ID) => {
        setList(list.filter((item) => item.id !== ID))
    }

    const handelReset = () => {
        setList([])
        setIsEdit(null)
    }

    const handleEditItems = (item) => {
        let newEditItem = list.find((items) => {
            return items == item
        });
        console.log("handleedititems",item);
        console.log(newEditItem);
        setEdite(false);
        setText(newEditItem.tittle);
        setIsEdit(item);
    }
    return (
        <div className="App">
            <input type="text" value={text} required onChange={handelChange} />
            {
            edit ? <button style={{ marginLeft: 30 }} onClick={handelAdd}>Add</button> : <button onClick={handelAdd}>Edit</button>
            }
            <button style={{ marginLeft: 30 }} onClick={handelReset}>Reset</button>
            {list.map((item, i) => {
                return (
                    <div key={i}>
                        <h1>{i + 1}. {item.tittle}</h1>
                        <button onClick={() => handelDelete(item.id)}>delete</button>
                        {/* <button onClick={() => handleEditItem(item.id)}>Edit</button> */}
                        <button onClick={() => handleEditItems(item)}>Edits</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Todo


