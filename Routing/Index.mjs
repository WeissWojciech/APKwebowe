import * as http from 'http';
import {readFile} from 'fs/promises';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async(req, res) => {

  const url = req.url;
  
  if (url === '/') {
    res.statusCode = 200;
  }
});

server.listen(port, hostname, () => {

  console.log(`Server is running at http://${hostname}:${port}/`);

});
  
