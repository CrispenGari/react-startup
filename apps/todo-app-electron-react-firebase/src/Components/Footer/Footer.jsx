import React from 'react'
import './Footer.css'
import {Button} from '@material-ui/core'
import {constants} from '../../utils/constants'
const Footer = ({ipc}) => {
    const handleClose=()=>{
        ipc.send(constants.EXIT_APP)
    }
    // ipc.on(constants.EXIT_APP_RES, (event, args)=>{
    //     console.log(args);
    // })
    return (
        <div className="footer">
            <h1>ToDo app</h1>
            <div className="footer__center">
                <marquee behavior="" direction="" loop>
                Developed by Crispen Gari @react-electron
                </marquee>
            </div>
            <div className="footer__left">
            <h1>Developed By Crispen Gari</h1>
                <Button className="footer__close" onClick={handleClose}>Exit</Button>
             </div> 
       </div>
    )
}

export default Footer
