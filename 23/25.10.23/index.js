import express from 'express'
import path from 'path'
import sqlite3 from 'sqlite3'

const __dirname = path.resolve()

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'home.html'));
    });
    app.get('/kontakt', (req, res) => {
        res.sendFile(path.join(__dirname, 'kontakt.html'));
    });
    app.post('/kontakt', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;
      
        console.log('Dane z formularza:');
        console.log('Imię:', name);
        console.log('E-mail:', email);
        console.log('Temat:', subject);
        console.log('Treść wiadomości:', message);
      
        res.redirect('/');
    });
    
    const db = new sqlite3.Database('baza1.sql')

    app.get('/api', (req, res) => {
        const apiLinks = {
          students: '/api/students',
          subjects: '/api/subjects',
        };
        res.json(apiLinks);
    });

    app.get('/api/students', (req, res) => {
        db.all('SELECT * FROM students', (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            res.json(rows);
          }
        });
    });
  
    app.listen(port, () => {
        console.log(`Aplikacja działa na porcie ${port}`);
    });