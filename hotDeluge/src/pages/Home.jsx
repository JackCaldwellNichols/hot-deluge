import React from 'react'
import Albums from '../components/Albums/Albums'
import Concerts from '../components/Concerts/Concerts'
import Contact from '../components/Contact/Contact'
import Hero from '../components/hero/Hero'
import Music from '../components/Music/Music'
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
