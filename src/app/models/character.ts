// GUÍA PARA EL ESTUDIANTE:
// Define aquí las interfaces para dar forma a los datos de la API.
// Visita https://rickandmortyapi.com/documentation/#character-schema para ver los detalles.

/**
 * Interfaz para un único personaje.
 * Solo incluye las propiedades que usaremos en la aplicación.
 */
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

/**
 * Interfaz para la respuesta de la API cuando se piden varios personajes.
 * La API envuelve el arreglo de personajes en un objeto.
 */
export interface ApiResponse {
  results: Character[];
  // La API también devuelve una propiedad `info` con datos de paginación,
  // pero no la usaremos en esta práctica.
}
