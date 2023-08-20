import React from 'react'
import './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerWrapper">
        <a href="https://www.facebook.com/HotDeluge/?ref=page_internal" className="icon" target='_blank'><FacebookIcon /></a>
        <a href="https://www.youtube.com/channel/UCGTneg7Ia6SijfEyME6a-kA" className="icon" target='_blank'><YouTubeIcon /></a>
        <a  href='https://www.instagram.com/hotdeluge/' className="icon" target='_blank'><InstagramIcon /></a>
        <a href= 'https://open.spotify.com/artist/6TKKF8UVJ54bEqW5oL0ioX' target='_blank' className="icon"><HeadphonesIcon /></a>
      </div>
      <span>www.hotdeluge.com</span>
    </div>
  )
}

export default Footer
