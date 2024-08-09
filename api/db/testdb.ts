import { Database } from 'bun:sqlite';
import { User, Character, Skill, Item } from './models';

// Create a new database or open an existing one
const db = new Database('p6db.sqlite');

// Run SQL to create a table
db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      UNIQUE(id, username)
    )
  `).run();


const test = ["gavin"];

test.forEach(guy => {
    db.query(`
            INSERT OR IGNORE INTO users (username) VALUES (?);
        `).run(guy);
})

// Assuming the 'users' table is already created and populated
const users = db.query("SELECT id, username FROM users").as(User).all();

users.forEach((user: User) => {
  user.greet(); // Each 'user' is an instance of the User class
});
