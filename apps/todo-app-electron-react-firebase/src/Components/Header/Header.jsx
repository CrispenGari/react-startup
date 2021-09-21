import React from 'react'
import {Search, NoteAdd, CalendarToday, Notifications} from '@material-ui/icons'
import './Header.css'
import {IconButton} from '@material-ui/core'
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
               <h1>Crisp Todo</h1>
               <NoteAdd/>
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search Todos"/>
                <Search/>
            </div>
            <div className="header__right">
                <IconButton title="Calender" className= "header__rightBtns">
                    <CalendarToday className="header__calender" />
                </IconButton>

                <IconButton title="Notifications" className= "header__rightBtns">
                     <Notifications className="header__notification" />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
