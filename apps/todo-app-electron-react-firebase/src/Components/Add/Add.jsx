import React, {useState } from 'react'
import './Add.css'
import {Button} from '@material-ui/core'
import database from '../../backend/firebase'
import firebase from 'firebase'
const Add = ({setAdd}) => {
    const [title, setTitle] = useState("")
    const [todo, setTodoText] = useState("")
    const [error, setError] = useState("")
    console.log(error);
    const addTodo =(e)=>{
        e.preventDefault()
        if(todo && title && title.length > 5 && todo.length >5){
            database.collection("todos").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                todo: todo, title: title
            })
            setTitle("")
            setTodoText("")
        }else{
            setError("The todo's title and text must contain at least 5 character it can not be less than that.")
        }
    }
    const handleRestore =()=>{
        setTitle("")
        setTodoText("")
    }
    return (
        <div className="add">
           <h1>Adding A to do</h1>
           <form className="add__form">
               <input placeholder="Add Todo Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
               <input placeholder="Add Todo Text" value ={todo} onChange={e=>setTodoText(e.target.value)}/>
               <div className="add__controls">
                    <Button className="add__btnAdd" type="submit" onClick ={addTodo}>Add</Button>
                    <Button className="add__btnRestore" onClick={handleRestore}>Restore</Button>
                    <Button className="add__btnClose" onClick={()=>setAdd(false)}>Close</Button>
               </div>
           </form>
        </div>
    )
}
export default Add
