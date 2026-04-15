import debug from 'debug';
import { env } from '../config/env.ts';
import type { Movie } from '../entities/movie.ts';
import type { Pool } from 'pg';

const log = debug(`${env.PROJECT_NAME}:repo.movies`);
log('Starting movies repository...');

export class MoviesRepo {
    private pool: Pool;
    constructor(pool: Pool) {
        this.pool = pool;
    }

    async readAllGenres() {
        const q = `
            SELECT 
            movie_id AS id,
            title,
            release_year AS releaseYear,
            director,
            duration,
            poster,
            rate,
        FROM movies`;
        const { rows } = await this.pool.query<Movie>(q);
        return rows[0];
    }
}
