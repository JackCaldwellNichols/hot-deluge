import React from 'react'
import './menu.scss'


const Menu = ({open, setOpen}) => {
  return (
    <div className={'menu ' + (open && 'active')}>
        <ul>
            <li onClick={()=>setOpen(false)}>
                <a href='#home'>Home</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href='#bio'>The Band</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href='#listen'>Listen</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href='#shows'>Shows</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
      
    </div>
  )
}

export default Menu
