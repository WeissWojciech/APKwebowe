
import * as http from 'http';
import { readFile } from "fs/promises";

const hostname = '127.0.0.1';

const port = 3000;


const server = http.createServer(async(req,res) => {

    const url=req.url;

    if (url === '/') {
        res.statusCode = 200;

        const home = await readFile('./index.html','utf-8');

        res.setHeader('content-type', 'text/html');
        res.write(home);
        res.end();
    }
    else if (url === '/dziekujemy') {
        res.statusCode = 200;

        const thankYou = await readFile('./thankYouPage.html', 'utf-8');

        res.setHeader('content-type', 'text/html');
        res.write(thankYou);
        res.end();
    }
    else if (url === '/api') {
        res.statusCode = 404;

        res.write("page in progress:)");
    }
    else{
        res.write("wrong direction!");
    }
})

server.listen(port, hostname, () => {

    console.log(`Server is running at http://${hostname}:${port}/`);
  
  });
