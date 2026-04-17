import debug from 'debug';
import { env } from '../config/env.ts';
import type { User } from '../entities/user.ts';
import { DatabaseSync } from 'node:sqlite';

const log = debug(`${env.PROJECT_NAME}:repo.users`);
log('Starting users repository...');

export class UsersRepo {
    db: DatabaseSync;
    constructor(db: DatabaseSync) {
        this.db = db;
    }

    readAllUsers() {
        const q = `SELECT * FROM users`;
        const stmt = this.db.prepare(q);
        const users = stmt.all();
        return users as unknown as User[];
    }
    readUserById(id: number) {
        const q = `SELECT * FROM users WHERE id = ?`;
        const stmt = this.db.prepare(q);
        const user = stmt.get(id);
        // if(!user){
        //     log(`User with id ${id} not found`)
        //     return null
        // }
        // Este ejemplo es válido pero si el patrón que estamos usando es tirar errores cuando no encontraba algo, 
        // seguimos ese patrón, no lo cambiamos a mitad de nuestro proyecto.
        
        return user;
    }
}
