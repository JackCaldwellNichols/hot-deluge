import React from "react";
import "./concerts.scss";
import { shows } from "../../data";

const Concerts = () => {
  return (
    <div className="concerts" id="shows">
      <h1>Conciertos</h1>
      <div className="concertsWrapper">
        {!shows.length ? (
          <div className="showsList">No hay conciertos próximos.</div>
        ) : (
          shows.map((show, index) => (
            <div className="showsList" key={index}>
              <span className="date">{show.date}</span>
              <span className="where">{show.name}</span>

              {show.link === "" ? (
                <span>Entradas no disponible</span>
              ) : (
                <a href={show.link} target="_blank" rel="noreferrer">
                  <button className="concertBtn">Entradas</button>
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Concerts;
