const http = require('http');

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/alumnos' && req.method === 'GET') {
        res.write('Hola alumnos');
    } else if (req.url === '/profesores') {
        res.write('Hola profesores');
    } else {
        res.write('Hola Mundo');
    }
    res.end();
}).listen(8080);

//init crea el package.json
//-lock - Historial de dependencias