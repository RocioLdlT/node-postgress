import { connectDB } from "./config/db.ts";
import { prepareTestingDB } from "./config/prepare-testing-db.ts";

const db = await connectDB();
await prepareTestingDB(db);
console.log('Testing database setup completed successfully.');
process.exit(0); //Para hacer una vez realizado el proceso, terminarlo y que se salga. ("Testing database setup completed successfully.")


// Setup ejecuta prepare-testing-db.ts 
// Podríamos ejecutarlo en el propio modulo de prepare-testing-db.ts pero es más sencillo y organizado ejecutarlo en otro archivo (setup.ts)
// De esta manera, al ejecutar los testing (genres y movies, o los que también ejecuten en su beforeEach la función prepareTestingDB(pool))


