// Trayendo la dependencia de express, previamente instalado
const express = require('express');
// Creando app de express
const app = express();

// Indicarle a Express, que sirva todos mis archivos estáticos 
// en un directorio específico (en este caso ./public/)
// __dirname es una var de ambiente de node.js que hace ref. 
// al directorio donde me encuentre
app.use(express.static(__dirname + '/public'));

// Añandiendo una ruta
app.get('/', (req, res) => { 
	return res.sendFile(__dirname + '/public/index.html');
});

// Añadiendo un catch-all redireccionando al index.html en public
app.get('/*', (req, res) => {
	return res.redirect('/');
});

// Exportar aplicación para servirla desde el servidor
module.exports = app;
