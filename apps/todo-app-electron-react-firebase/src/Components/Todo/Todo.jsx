import React from 'react'
import './Todo.css'
import {IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import database from '../../backend/firebase'
const Todo = ({id, data }) => {
    const handleDelete=(id)=>{
        if(id){
            database.collection("todos").doc(id).delete() 
        }
    }
    return (
        <div className="todo">
            <div className="todo__left">
                <h1>{data?.title}</h1> 
                <p>{data?.todo}</p>  
            </div>
            <div className="todo__right">
               <time>{new Date(data?.timestamp?.toDate()).toDateString()}</time> 
               <IconButton onClick={()=>handleDelete(id)} title="Delete" className="todo__deletebtn">
                   <Delete className="todo__deleteico"/>
               </IconButton>
            </div>
        </div>
    )
}
export default Todo
