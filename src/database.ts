import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Universidad11201911',
    database: 'firstapi',
    port: 5432
});