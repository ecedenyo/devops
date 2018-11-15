// Prueba contra el app en sí
// Hacer ref. a la librería supertest que genera http requests
const request = require('supertest');

// Hacer ref. al app 
const app = require('../app');

// Declaro mi test (mocha)
describe('app', function() {
	// 'it', behavior-driven-test
    // siendo que esta es una prueba asíncrona se pasa un callback
    it('should serve html on index', (done) => {
		// visite home, se espera respuesta del tipo tal con el código tal
        request(app).get('/').expect('Content-Type', /html/).expect(200, done)
	});
});
