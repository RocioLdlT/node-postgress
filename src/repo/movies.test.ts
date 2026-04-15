import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { connectDB } from "../config/db.ts";
import { MoviesRepo } from "./movies.ts";

describe('MoviesRepo', async () => {

    const pool = await connectDB();
    const moviesRepo = new MoviesRepo(pool);
})
