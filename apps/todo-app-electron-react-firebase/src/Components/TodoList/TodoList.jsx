import React from 'react'

import './TodoList.css'
import {Todo} from '../../Components'
const TodoList = ({todos}) => {
     console.log(todos)
    return (
        <div className="todolist">
            <h1>Your Todos</h1>
            <div className="todolist__list">
               {
               todos?.map(({id, data})=><div key={id}>
                     <Todo id={id} data={data}/> 
                </div>
                )
               }
                
           </div>
        </div>
    )
}

export default TodoList
