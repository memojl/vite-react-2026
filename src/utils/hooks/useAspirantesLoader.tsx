import { fetchAspirantes } from "../../services/AspirantesService";

export const aspirantesLoader = async () => {
    const aspirantes = await fetchAspirantes();
    if(!Array.isArray(aspirantes)){
        return [];
    }
    return aspirantes;
}