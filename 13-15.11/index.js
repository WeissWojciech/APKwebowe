import express from 'express';
import * as apiPath from './router.js';

import { MongoClient } from 'mongodb';

const app = express();

const port = 3000;
const hostName = "127.0.0.1"

const uri = "mongodb+srv://Student:<password>@data-13-15.irjn7z1.mongodb.net/?retryWrites=true&w=majority";

async function connectToMongoDB() {
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('Błąd podczas połączenia z bazą danych:', error);
    }
}

app.post('/kontakt', async (req, res) => {
    const body = req.body;
    console.log(body.imie);
    const user = {
        name: body.imie,
        email: body.email,
        topic: body.szefy,
        content: body.tresc
    };
    
    const db = await connectToMongoDB();
    
    await db.collection('messages').insertOne(user);
    
    res.redirect(302, '/');
});

app.get('/',(req,res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res) =>{
    res.sendFile(`${__dirname}/form.html`)
})

app.use('/api',apiPath)

app.listen(port, ()=>{
    console.log(`Server is running at ${hostName}:${port}`);
})