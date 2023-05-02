import React, {useState } from "react";
import HdIcon from '@mui/icons-material/Hd';
import './nav.scss'
import { Link } from "react-router-dom";



const Navbar = () => {



  const [collapsed, setCollapsed] = useState(false);

  const handleClickLink = () => {
    setCollapsed(!collapsed);
  };

  return (

      
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
          <div className="ms-3">
          <Link to='/' className="icon nav-link"  onClick={handleClickLink}>
                  <HdIcon />
            </Link>
          </div>
          <button
            className={
              !collapsed ? "navbar-toggler collapsed" : "navbar-toggler"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={collapsed}
            aria-label="Toggle navigation"
            onClick={handleClickLink}
          >
            <span className="navbar-toggler-icon mt-1">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div
            className={`${!collapsed ? 'collapse' : ''} navbar-collapse justify-content-center ms-3`}
            id="navbarSupportedContent"
            role="button"
            >
              <ul className="navbar-nav m-0">
                    <li className="nav-item">
                        <a className="nav-link"  href = '#box' onClick={handleClickLink}>
                          The Band  
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#tarifas' onClick={handleClickLink}>
                           Music
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#team' onClick={handleClickLink}>
                            Shows
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#contact' onClick={handleClickLink}>
                            Discography
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href = '#contact' onClick={handleClickLink}>
                            Contact
                        </a>
                    </li>
              </ul>
          </div>
           {/* <div className="iconWrapper">
                <a href="https://www.facebook.com/HotDeluge/?ref=page_internal" className="icon" target='_blank'><FacebookIcon /></a>
                <a href="https://www.youtube.com/channel/UCGTneg7Ia6SijfEyME6a-kA" className="icon" target='_blank'><YouTubeIcon /></a>
                <a  href='https://www.instagram.com/hotdeluge/' className="icon" target='_blank'><InstagramIcon /></a>
                <a href= 'https://open.spotify.com/artist/6TKKF8UVJ54bEqW5oL0ioX' target='_blank' className="icon"><HeadphonesIcon /></a>
            </div>*/}

        </nav>

  );
};

export default Navbar;

