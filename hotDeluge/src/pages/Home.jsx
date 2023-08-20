import React from 'react'
import Albums from '../components/Albums/Albums'
import Concerts from '../components/Concerts/Concerts'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Hero from '../components/hero/hero'
import Music from '../components/Music/Music'
import Navbar from '../components/Navbar/Navbar'
import Band from '../components/TheBand/Band'



const Home = () => {
  return (
    <div>
        <Hero />
        <Band />
        <Music />
        <Albums />
        <Concerts />
        <Contact />

    </div>
  )
}

export default Home
