import { useEffect, useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { members } from "../../data";
import "./borja.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/logo.png";

const Borja = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [bandMate, setBandMate] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    members.map((member) => {
      if (member.name === path) {
        setBandMate(member);
        setPhotos(member.photos);
      }
    });
  }, [bandMate]);

  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} className="navLogo" />
        </Link>
      </nav>
      <div className="bio">
        <h2 className="bioTitle">{bandMate.name}</h2>
        <div className="bioTop">
          <div className="left">
            <img src={bandMate.img} />
          </div>
          <div className="right">
            <h4>
              {bandMate.name} {bandMate.desc}
            </h4>
            <h5>Instrumento: {bandMate.plays}</h5>
            <p>
              Síguale:
              <a href={bandMate.link} target="_blank" rel="noreferrer">
                <InstagramIcon className="bioIcon" />
              </a>
            </p>
            <Link to="/">
              <button className="backBtn">Volver</button>
            </Link>
          </div>
        </div>
        <div className="bioBottom">
          {photos.map((photo, index) => (
            <div className="photoContainer" key={index}>
              <img src={photo.img} className="memberPhotos" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Borja;
