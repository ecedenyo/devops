// Indicar que sirva por 'http'
const http = require('http');
// Traer el app creado haciendo ref. a donde se encuentra
const app = require('./app');

// Crear servidor http, escuchando por puerto 3000
http.createServer(app).listen(3000);

// Mostrar mensaje indicando que el servidor
// está corriendo
console.log('Im running');
