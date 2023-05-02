import React from 'react'
import ReactVideoPlayer from './ReactVideoPlayer'
import YouTube from '@mui/icons-material/YouTube'
import './music.scss'
import { Link } from 'react-router-dom'

const Music = () => {
  return (
    <div className='music'>
        <div className="musicWrapper">
            <ReactVideoPlayer className='video' />
            <div className='iconContainer'>
                <Link to="https://www.youtube.com/channel/UCGTneg7Ia6SijfEyME6a-kA" className='iconContainerLink'>
                    <h6>
                        Watch on Youtube
                    </h6>
                     <YouTube className='videoIcon'/> 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Music
