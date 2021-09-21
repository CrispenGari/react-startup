import React from 'react'

import './SideBarItem.css'
const SideBarItem = ({Icon, title}) => {
    return (
        <div className={`sidebaritem ${title}`} title={title}>
            {Icon}
            <p>{title}</p>
        </div>
    )
}

export default SideBarItem
