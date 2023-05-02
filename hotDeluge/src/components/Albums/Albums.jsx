import React from 'react'
import './albums.scss'
import AppleIcon from '@mui/icons-material/Apple';
import ContactlessIcon from '@mui/icons-material/Contactless';

const Albums = () => {
  return (
    <div className='albums'>
      <h1>Listen</h1>
      <div className='albumWrapper'>
        <div className="albumLeft">
            <img src='https://i.scdn.co/image/ab67616d0000b273cbd79e2a84d55be2ebeb576d'/>
        </div>
        <div className="albumRight">
            <h4>Open the Floodgates</h4>
            <span>2021</span>
            <div className='iconCont'>Listen on:
                <a href="" className='albumIcon'><AppleIcon /></a>
                <a href= '' className='albumIconSpot'><ContactlessIcon /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Albums
