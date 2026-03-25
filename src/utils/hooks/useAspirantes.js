import { useEffect, useState } from "react";
import { fetchAspirantes } from "../services/AspirantesService";

export const useAspirantes = () => {
  const [aspirantes, setAspirantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAspirantes = async () => {
      try {
        const data = await fetchAspirantes();
        setAspirantes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAspirantes();
  });

};
