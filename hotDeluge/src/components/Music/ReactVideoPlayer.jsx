import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import distopia from '../../assets/distopia.mp4'

const ReactVideoPlayer = () => {
  return (
    <video 
            autoPlay 
            muted
            loop
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            style={{right: '0', bottom: '0', minHeight: '!00%', minWidth: '100%'}}
            >
             <source src={distopia} type='video/webm' autoPlay></source>
    </video>

  )
}

export default ReactVideoPlayer
