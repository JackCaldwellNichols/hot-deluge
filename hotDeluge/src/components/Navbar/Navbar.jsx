import React, {useState } from "react";
import HdIcon from '@mui/icons-material/Hd';
import './nav.scss'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = ({open, setOpen}) => {


  // const setMenuOpen = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <div className='nav'>
        <motion.div
          className={'navWrapper ' + (open && 'active')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
        <div className="left">
          <a href="/#home">logo</a>
        </div>
        <div className="right">
            <div className="navItems">
              <span>The Band</span>
              <span>Listen</span>
              <span>Shows</span>
              <span>Contact</span>
            </div>
            <div className='hamburger' onClick={()=>setOpen(!open)}>
                <span className='line1'></span>
                <span className='line2' ></span>
                <span className='line3'></span>
            </div>
        </div>
      </motion.div>
    </div>
      


  );
};

export default Navbar;

