import Acceso from "./components/Acceso";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Contenido from "./ui/Contenido";
import Aspirantes from "./ui/pages/Aspirantes";
import Preventa from "./ui/pages/Preventa";
import Profesiones from "./ui/pages/Profesiones";

function App() {

  const profesiones = [
    {
      id: 1,
      nombre: "Abogado"
    },
    {
      id: 2,
      nombre: "Arquitecto"
    },
    {
      id: 3,
      nombre: "Botánico"
    },
    {
      id: 4,
      nombre: "Computista"
    },
    {
      id: 5,
      nombre: "Economista"
    },
    {
      id: 6,
      nombre: "Técnico de sonido"
    },
    {
      id: 7,
      nombre: "Profesor"
    },
    {
      id: 8,
      nombre: "Linguista"
    },
  ];

  return (
    <div className="dashboard">
      <Acceso />
      <Menu />
      <main className="content-wrap">
        {/* Enrutamiento */}
        <Routes>
          <Route path="/" element={<Contenido />} />
          <Route path="/empresa" element={<Preventa />} />
          <Route path="/aspirantes" element={<Aspirantes />} />
          <Route path="/profesiones" element={<Profesiones listado={profesiones} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
