import path from 'path'
import express from 'express'

const port = 3000
const app = express()
const __dirname = path.resolve()

app.get('/', (req,res)=>{
    res.statusCode = 200;
    res.sendFile(`${__dirname}/src/html/home.html`)
})

app.get('/kontakt', (req,res)=>{
    res.sendFile(`${__dirname}/src/html/kontakt.html`)
})

app.post('/kontakt', (req,res) =>{
    const name = req.body.nam
    const message = req.body.message

    const Usermessage = {
        name,
        message
    }

    console.log(Usermessage)

    res.sendFile(`${__dirname}/src/html/great.html`)
})

app.listen(port, ()=>{
    console.log(`app is listening on 127.0.0.1:${port}`)
})