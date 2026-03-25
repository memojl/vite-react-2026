import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card.tsx";

function Aspirantes() {
  const aspirantes: any = useLoaderData() ?? [];
  return (
    <section className="content">
      <h2>Aspirantes</h2>
      <article className="person-boxes">
        {
          (aspirantes.length > 0) ?
            <Card listado={aspirantes} /> :
            <div>Hubo un error</div>
        }
      </article>
    </section>
  );
}

export default Aspirantes;
