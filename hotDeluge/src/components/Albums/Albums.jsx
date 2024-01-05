import React from "react";
import "./albums.scss";
import AppleIcon from "@mui/icons-material/Apple";
import ContactlessIcon from "@mui/icons-material/Contactless";

const Albums = () => {
  return (
    <div className="albums" id="listen">
      <div className="albumWrapper">
        <h1>Escuchar</h1>
        <div className="albumContent">
          <div className="albumLeft">
            <img src="https://i.scdn.co/image/ab67616d0000b273cbd79e2a84d55be2ebeb576d" />
          </div>
          <div className="albumRight">
            <h4>Open the Floodgates</h4>
            <span>2021</span>
            <div className="iconCont">
              Escuchar:
              <a
                href="https://music.apple.com/us/artist/hot-deluge/1567907497"
                className="albumIcon"
                target="_blank"
                rel="noreferrer"
              >
                <AppleIcon />
              </a>
              <a
                href="https://open.spotify.com/artist/6TKKF8UVJ54bEqW5oL0ioX"
                className="albumIconSpot"
                target="_blank"
                rel="noreferrer"
              >
                <ContactlessIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
