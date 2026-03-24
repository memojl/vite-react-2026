import { useEffect, useState } from "react";
import { fetchAspirantes } from "../../services/AspirantesService.tsx";
import Card from "../../components/Card.tsx";

function Aspirantes() {
  const [aspirantes, setAspirantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAspirantes = async () => {
      try {
        const data = await fetchAspirantes();
        console.log(data);
        setAspirantes(data);
      } catch (error) {
        //setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAspirantes();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
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
