// Exercise 96: Using Modules for Configuration

export const DB_HOST = "localhost";
export const DB_PORT = 5432;
import { DB_HOST, DB_PORT } from './config.js';
console.log(`Connecting to ${DB_HOST}:${DB_PORT}`);