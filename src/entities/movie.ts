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

 export interface RelationsMovieGenre{
    movies_id: number;
    genres_id: number; // es number porque es un id, string sería el name del genre

 }
