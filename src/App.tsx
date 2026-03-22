import Acceso from "./components/Acceso";
import Menu from "./components/Menu";
import { Routes, Route, Link } from "react-router-dom";
import Contenido from "./ui/pages/Contenido";
import Aspirantes from "./components/contenido/Aspirantes";
import Preventa from "./components/contenido/Preventa";
import Profesiones from "./components/contenido/Profesiones";

function App() {
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
          <Route path="/profesiones" element={<Profesiones />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
