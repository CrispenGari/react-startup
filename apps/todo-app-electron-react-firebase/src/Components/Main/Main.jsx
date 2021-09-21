import React from 'react'
import './Main.css'
import {Add} from '../../Components'
import { WbIncandescent } from '@material-ui/icons'
const Main = ({add, setAdd}) => {
    return (
        <div className="main">
            {
                add?<Add setAdd={setAdd}/>: <div className="main__waiting">
                  
                    <h1>How are you, We are waiting for you to select an option!!</h1>
               <WbIncandescent className="main__waitingIcon"/>
                </div>
            }
           
        </div>
    )
}

export default Main
