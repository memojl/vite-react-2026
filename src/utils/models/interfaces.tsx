export interface Profesiones {
    id: number;
    nombre: string;
}

export interface CardProps {
  listado: Aspirantes[];
}

export interface Aspirantes {
     id: string;
    nombre: string;
    apellido: string;
    foto: string;
    email: string;
}