import express from 'express'

const app = express()
const port = 3000;
const hostname = '127.0.0.1'

app.get('/',(req, res)=>{

    res.sendFile("/home/student/WW_4D/home.html")

})

app.get('/kontakt',(req,res)=>{

    res.sendFile("")

})

app.listen(port, hostname, ()=>{
    console.log(`app listening on port ${port}`)
})