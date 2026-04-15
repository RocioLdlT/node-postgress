import debug from 'debug';
import { env } from '../config/env.ts';
import type { Genre } from '../entities/genre.ts';
import type { Pool } from "pg";

const log = debug (`${env.PROJECT_NAME}:repo.genres`);
log("Starting genres repository...");

export class GenreRepo{
    private pool: Pool
    constructor (pool: Pool){
        this.pool = pool;
    }

    async readAllGenres () {
        const{rows} = await this.pool.query<Genre>('SELECT genre_id AS id, name FROM genres')
        return rows;
    }
    async readGenreById (id: number): Promise<Genre>{
        const q =`
        SELECT genre_id AS id, name
        FROM genres
        WHERE genre_id = $1`;
        const{rows} = await this.pool.query<Genre>(q, [id]);

        if(rows.length === 0){
            throw new Error (`Genre with id ${id} not found`
            )
        }
    return rows[0] as Genre
    }

}
