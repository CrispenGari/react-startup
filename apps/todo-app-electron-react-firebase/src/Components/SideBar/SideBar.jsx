import { Apps, DeleteForever, NoteAdd, Save, AcUnit } from '@material-ui/icons'
import React, { useState } from 'react'
import {IconButton} from '@material-ui/core'
import {SideBarItem} from '../../Components'
import './SideBar.css'
const SideBar = ({setAdd}) => {
    const [showOptions, setShowOptions] = useState(false)
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton onClick={()=>setShowOptions(!showOptions)}>
                    <Apps/>
                </IconButton>
                <h1>Options</h1>
            </div>
            {
                showOptions?<div className="sidebar__items">
                <div onClick={()=>setAdd(!false)}>
                    <SideBarItem title="add" Icon={<NoteAdd/>}/>
                </div>
                <div className="" >
                    <SideBarItem title="save All" Icon={<Save/>}/>
                </div>
                
               <div className="">
                   <SideBarItem title="delete" Icon={<DeleteForever/>}/>
               </div>
            </div>:
            <div className="sidebar__items--waiting">
                <AcUnit className="sidebar__items--waitingIcon"/>
                <small>Click the Apps Icon To See The options</small>
            </div>
            }
            
        </div>
    )
}

export default SideBar
