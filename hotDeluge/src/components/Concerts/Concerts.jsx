import React from 'react'
import './concerts.scss'
import {shows} from '../../data'

const Concerts = () => {
  return (
    <div className='concerts'>
      <h1>Upcoming Shows</h1>
        <div className='concertsWrapper'>
        {shows.map((show) => (
            <div className="showsList">
                <span className='date'>{show.date}</span>
                <span className='where'>{show.name}</span>

                <a href='http://www.woutick.es/evento/25039/entradas-hot-deluge-en-el-perro-malasana-madrid'><button className='concertBtn'>Tickets</button></a>
            </div>
        ))
        }
        </div>
    </div>
  )
}

export default Concerts
