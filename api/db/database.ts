import { Database } from "bun:sqlite";
import { User, Character, Skill, Item } from './models';

// Create or open a SQLite database
export const db = new Database("p6.sqlite");

// Create a table for user accounts if it doesn't already exist
db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE );`).run();

// db.query(`
//     CREATE TABLE IF NOT EXISTS characters (
//       id: INTEGER PRIMARY KEY AUTOINCREMENT,
//       userId INTEGER,
//       name TEXT NOT NULL,
//       lore TEXT NOT NULL,
//       brawn INTEGER NOT NULL,
//       intel INTEGER NOT NULL,
//       swift INTEGER NOT NULL,
//       charm INTEGER NOT NULL,
//       FOREIGN KEY (userId) REFERENCES users(id)
//     );
//   `).run();

// db.query(`
//     CREATE TABLE IF NOT EXISTS skills (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT NOT NULL,
//       info TEXT NOT NULL
//     );
//   `).run();

// db.query(`
//     CREATE TABLE IF NOT EXISTS items (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT NOT NULL UNIQUE,
//       info TEXT NOT NULL
//     );
//   `).run();

//   db.query(`
//     CREATE TABLE IF NOT EXISTS characters_skills (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       skillId INTEGER,
//       characterId INTEGER
//     );
//   `).run();
