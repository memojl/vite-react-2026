import { urlApi } from "../utils/conts";

export const fetchAspirantes = async () => {
  try {
    const response = await fetch(urlApi + "?results=6&nat=es");
    if (!response.ok) {
      throw new Error("Error al obtener a los aspirantes");
    }
    const data = await response.json();
    console.log(data);
    return data.results.map((user) => ({
      id: user.login.uuid,
      nombre: user.name.first,
      apellido: user.name.last,
      foto: user.picture.large,
      email: user.email,
    }));
  } catch (error) {
    console.error('Ha ocurrido un error', error);
    throw error;
  }
};
