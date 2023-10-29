import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
    {/* cabecera */}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>PelisPumba</h1>
    </header>

    {/* barra de navegacion */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">peliculas</a></li>
            <li><a href="/#">Block</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* contenido principal */}
    <section className="content">
       {/* van las peliculas */}
       <Listado listadoState={listadoState} setListadoState={setListadoState} />
    </section>

    {/* barra lateral */}
    <aside className="lateral">
      <Buscador/>

       <Crear setListadoState={setListadoState} />
    </aside>

    <footer className="footer">
        &copy; Eduardo Williams
    </footer>
  </div>
  );
}

export default App;
