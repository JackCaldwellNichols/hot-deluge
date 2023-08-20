import React, {useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import {members} from '../../data'
import './borja.scss'
import InstagramIcon from '@mui/icons-material/Instagram';

const Borja = () => {

const location = useLocation()
const path = location.pathname.split('/')[2]
const [bandMate, setBandMate] = useState([])
const [photos, setPhotos] = useState([])

useEffect(() => {
    members.map((member) =>{
        if(member.name === path){
            setBandMate(member)
            setPhotos(member.photos)
        }
    })
}, [bandMate])

  return (
    <div className='bio'>
           <h2 className='bioTitle'>{bandMate.name}</h2>
            <div className="bioTop">
                <div className="left">
                    <img src={bandMate.img}/>
                </div>
                <div className="right">
                    <h4>{bandMate.name} {bandMate.desc}</h4>
                    <h5>Intrumento: {bandMate.plays}</h5>
                    <p>Síguale:<a href={bandMate.link} target='_blank'>
                        <InstagramIcon className='bioIcon'/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="bioBottom">
                {photos.map((photo) => (
                    <div className='photoContainer'>
                        <img  src={photo.img} className='memberPhotos'/>
                    </div>
                ))}

            </div>
    </div>
  )
}

export default Borja
