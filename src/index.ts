import debug from "debug";
import{ env } from "./config/env.ts"
import { connectDB } from "./config/db.ts"
import { GenreRepo } from "./repo/genres.ts";

const log = debug (`${env.PROJECT_NAME}:index`);
log("Starting application...");

// Preparación para el genres.test.ts
const pool = await connectDB();
const genresRepo = new GenreRepo(pool);

// Primer test
const g = await genresRepo.readAllGenres();
log('Genres:', g)

// Segundo test: leer un género por id
try {
    const g2 = await genresRepo.readGenreById(100);
    log('Genre with id 100', g2);
}catch (error) {
    log((error as Error).message);
}



