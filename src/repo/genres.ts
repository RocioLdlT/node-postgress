import debug from "debug";
import type { Genre } from '../entities/genre.ts';
import type { Pool } from "pg";

export class GenreRepo{
    private pool: Pool
    constructor (pool: Pool){
        this.pool = pool;
    }

    async const readAllGenres () {
        const{rows} = await this.pool.query<Genre>('SELECT genre_id AS id, name FROM genres')
        return rows;
    }
    async const readGenreById (id: number){
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
