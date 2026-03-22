import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

function Menu() {
  const style: any = {
    fontSize: "1.2rem",
    color: "cornflowerblue",
  };

  return (
    <>
      <header className="menu-wrap">
        <figure className="user">
          <div className="user-avatar">
            <Link to="/">
              <img className="w-100" src={Logo} alt="Cedavilu Web Academy" />
            </Link>
          </div>
          <figcaption>Cedavilu Web Academy</figcaption>
        </figure>
        <nav>
          <section className="menu">
            <h3>Opciones</h3>
            <ul>
              <li>
                <Link to="/empresa">
                  <i className="bi bi-building" style={style}></i>- Empresas
                </Link>
              </li>
              <li>
                <Link to="/aspirantes">
                  <i className="bi bi-person" style={style}></i>- Personas
                </Link>
              </li>
              <li>
                <Link to="/profesiones">
                  <i className="bi bi-list-check"></i>- Profesiones
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bi bi-person-vcard" style={style}></i>-
                  Postulate aquí
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bi bi-chat-left-text"></i>- Contacto
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
}

export default Menu;
