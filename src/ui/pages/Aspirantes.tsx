import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card.tsx";

function Aspirantes() {
  const aspirantes = useLoaderData() ?? [];
  return (
    <section className="content">
      <h2>Aspirantes</h2>
      <article className="person-boxes">
        <Card listado={aspirantes} />
      </article>
    </section>
  );
}

export default Aspirantes;
