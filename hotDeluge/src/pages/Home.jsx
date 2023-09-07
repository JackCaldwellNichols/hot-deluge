import Albums from "../components/Albums/Albums";
import Concerts from "../components/Concerts/Concerts";
import Contact from "../components/Contact/Contact";
import Hero from "../components/hero/Hero";
import Music from "../components/Music/Music";
import Band from "../components/TheBand/Band";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu/Menu";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Hero />
      <Band />
      <Music />
      <Albums />
      <Concerts />
      <Contact />
    </div>
  );
};

export default Home;
