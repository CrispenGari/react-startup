import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../../firebase/firebase'
import './Home.css'
import {useSelector} from 'react-redux'
import { ExitToApp } from '@material-ui/icons'
const Home = () => {
    const user = useSelector(state=>state.authentication)
    console.log(user)
    return (
        <div className="home">
            <div className="home__top">
                <h1>{user?.providerData[0]?.providerId}</h1>
                <Avatar className="home__avatar" src={user?.photoURL} alt={user?.displayName}/>
            </div>
            
            <small>This is what your profile looks</small>
            <h1>{user?.displayName}</h1>
            <img src={user?.photoURL} alt=""/>
            <Button startIcon={<ExitToApp className="home__icon"/>} onClick={()=>auth.signOut()} className="home__signout">Sign Out</Button>
        <small>Developed by Crispen Gari</small>
        </div>
    )
}

export default Home
