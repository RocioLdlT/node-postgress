import type { Genre } from "./genre.ts";

export interface Movie {
    id: number;
    title: string;
    releaseYear: number;
    director: string;
    duration: number; // Duración en minutos
    poster: string; // URL de la película
    rate: number; // ratio de la película
    genres?: Genre[]; // Array de los id de los géneros asociados a las películas. Quizá no relevante para esta ocasión pero si para otras.

}
