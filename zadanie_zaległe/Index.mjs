import * as http from 'http';
import {readFile} from 'fs/promises';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async(req, res) => {

  const url = req.ulr;
  
  if (url === '/') {
    res.statusCode = 200;

    const helo = await readFile('./hello.html');

    res.setHeader('content-type', 'text/html');
    res.write(helo);
    res.end();
  }
});

server.listen(port, hostname, () => {

  console.log(`Server is running at http://${hostname}:${port}/`);

});
  
