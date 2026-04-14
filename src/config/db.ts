import debug from "debug";
import{ env } from "./env.ts"
import { Pool } from 'pg';
const log = debug (`${env.PROJECT_NAME}:configDB`);

log("Loaded database connection...");

export const connectDB = async () => {
    const pool = new Pool({
        user: env.PGUSER,
        password: env.PGPASSWORD,
        host: env.PGHOST,
        port: env.PGPORT,
        database: env.PGDATABASE

    });
        try {
        const client = await pool.connect();
        log("Database connection established successfully.");
        log("Connected to database:", pool.options.database)
        client.release();
    } catch (error) {
        log("Error connecting to the database:", error);
        throw error;
    }
    return pool;
}
