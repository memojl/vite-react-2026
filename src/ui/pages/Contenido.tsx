import Aspirantes from "../../components/contenido/Aspirantes";
import Preventa from "../../components/contenido/Preventa";
import Profesiones from "../../components/contenido/Profesiones";

function Contenido() {
  return (
    <main className="content-wrap">
      <Preventa />
      <Aspirantes />
      <Profesiones />
    </main>
  );
}

export default Contenido;
