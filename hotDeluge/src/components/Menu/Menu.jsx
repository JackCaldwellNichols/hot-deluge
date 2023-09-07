import "./menu.scss";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={"menu " + (open && "active")}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#home">Inicio</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#bio">El Grupo</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#listen">Escuchar</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#shows">Conciertos</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
