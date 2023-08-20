import React from 'react'
import './hero.scss'
import { motion } from "framer-motion";
import logo from '../../assets/main.png'

const Hero = () => {
  return (
    <div className="hero" id='#home'>
      <motion.div
      className="heroWrapper"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <img src={logo} alt="" />
      <h1>Hot Deluge</h1>
    </motion.div>
  </div>
  )
}

export default Hero
