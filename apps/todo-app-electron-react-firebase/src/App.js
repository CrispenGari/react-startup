
import './App.css';
import {Main, Header, Footer, SideBar, TodoList} from './Components'
import React, {useState, useEffect} from 'react'
import database from './backend/firebase'
const electron = window.require("electron")

const  App=()=>{
  const [add, setAdd] = useState(false)
  const [todos, setTodos] = useState([])
  const ipc = electron.ipcRenderer
  useEffect(()=>{
    const unsubscribe =database.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot=>{
        setTodos(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()})))
    })
    return ()=>{
        unsubscribe()
    }
}, [])
  return (
    <div className="app">
      <Header/>
        <div className="app__main">
          <SideBar setAdd={setAdd}/>
          <Main add= {add} setAdd={setAdd}/>
        </div>
      <div className="app__todolist">
          <TodoList todos={todos}/>
      </div>
      <Footer ipc ={ipc}/>
    </div>
  );
}

export default App;
