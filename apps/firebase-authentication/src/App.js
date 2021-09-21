import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {Home, Authentication} from './Components'
import {auth} from './firebase/firebase'
import {authentication} from './actions'
function App() {
  const user = useSelector(state=>state.authentication)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(authUser=>{
        if(authUser){
          dispatch(authentication(authUser))
        }else{
          dispatch(authentication(null))
        }
    })
    return ()=>{
      unsubscribe()
    }
  },[dispatch])
  return (
    <div className="app">
        {
          user? <div className="app__home"><Home/></div>: 
          <div className="app__authentication">
             <Authentication/>
          </div>
         
        }
    </div>
  );
}

export default App;
