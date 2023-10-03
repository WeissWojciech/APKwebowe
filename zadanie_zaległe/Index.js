const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  fs.readFile('hello.html', 'utf8', (err, data) => {
    if (err) {
      // W przypadku błędu wyślij odpowiedź błędu
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Błąd serwera');
    } else {
      // Ustaw nagłówki odpowiedzi dla pliku HTML
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Wyślij zawartość pliku hello.html
      res.end(data);
});

server.listen(port, hostname, () => {

  console.log(`Server is running at http://${hostname}:${port}/`);

});
  
