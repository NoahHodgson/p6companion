import { db } from './db/database';
import express from "express";
import cors from 'cors';
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json());
app.use(cors( {
  credentials: true,
  origin: 'http://localhost:3000'
}));

const bcryptSalt = bcrypt.genSalt(12);

const port = 8080;

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  const user = db.query('SELECT id, username FROM users').all();
  
  console.log(user);
  res.send(req.body);
})

app.post("/register", (req, res) => {
  const { name, password } = req.body;

  db.query(`INSERT OR IGNORE INTO users (username) VALUES (?)`);


  res.send({ name, password });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
