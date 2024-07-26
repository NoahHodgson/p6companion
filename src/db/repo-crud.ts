import { db } from './database';
import { User, Character, Skill, Item } from './models';

export function getUserById(id: number): User | null {
  return db.query("SELECT * FROM users WHERE id = ?;").as(User).get(id);
}

export function addUser(user: User): void {
  db.query("INSERT INTO users (username) VALUES (?);").run(user.username);
}

export function addChar(user: User, name: string, lore: string, stats: Array<number>) {
    db.query(
      "INSERT INTO characters (userId, name, lore, brawn, intel, swift, charm) VALUES (?, ?, ?, ?, ?, ?, ?);"
    ).run(user.id, name, lore, stats[0], stats[1], stats[2], stats[3]);
}
