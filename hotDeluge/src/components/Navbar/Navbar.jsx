import logo from "../../assets/logo.png";
import "./nav.scss";

import { motion } from "framer-motion";

const Navbar = ({ open, setOpen }) => {
  // const setMenuOpen = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <div className="nav">
      <motion.div
        className={"navWrapper " + (open && "active")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="left">
          <a href="#home">
            <img src={logo} className="logo" />
          </a>
        </div>
        <div className="right">
          <div className="navItems">
            <a href="#bio">Biografía</a>
            <a href="#listen">Escuchar</a>
            <a href="#shows">Conciertos</a>
            <a href="#contact">Contacto</a>
          </div>
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
