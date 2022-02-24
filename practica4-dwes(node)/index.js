//Creamos el servidor
var http = require('http');
var url = require('url');
var fs = require('fs');
var moduloBD = require('./my_modules/bd.js');

http.createServer(function (peticion, respuesta) {
    var url_peticion = url.parse(peticion.url, true);
    var pathname = url_peticion.pathname;

    respuesta.setHeader('Access-Control-Allow-Origin', '*');
    respuesta.setHeader('Access-Control-Allow-Methods', 'GET, POST,OPTIONS, PUT, PATCH, DELETE');

    if (pathname == '/') {
        fs.readFile('harry.html', function (err, dato) {
            respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
            respuesta.write(dato);
            respuesta.end();
        });
    } else if (pathname == '/importar') {
        moduloBD.importar('./data/harry-potter-characters.json', function (salida) {
            respuesta.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
            respuesta.write(salida);
            respuesta.end();
        });
    } else if (pathname == '/consulta') {
        let datosPosts = '';
        peticion.on('data', function (data) {
            if (datosPosts.length > 1e6) {
                respuesta.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
                respuesta.write('La petición supera el tamaño permitido.');
                return respuesta.end();
            } else {
                datosPosts += data;
            }
        }).on('end', function () {
            let parametros;
            let datos;
            if (peticion.method === 'GET') {
                datos = url_peticion.query;
            } else {
                datos = datosPosts;
            }
            parametros = new URLSearchParams(datos);
            let filtro = parametros.get('filtro');
            moduloBD.consulta(filtro, function (salida) {
                respuesta.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
                respuesta.write(salida);
                respuesta.end();
            });
        });
    } else if (pathname == '/agregar') {
        let datosPosts = '';
        peticion.on('data', function (data) {
            if (datosPosts.length > 1e6) {
                respuesta.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
                respuesta.write('La petición supera el tamaño permitido.');
                return respuesta.end();
            } else {
                datosPosts += data;
            }
        }).on('end', function () {
            let parametros;
            let datos;
            if (peticion.method === 'GET') {
                datos = url_peticion.query;
            } else {
                datos = datosPosts;
            }
            parametros = new URLSearchParams(datos);
            let filtro1 = parametros.get('img');
            let filtro2 = parametros.get('nombre');
            let filtro3 = parametros.get('especie');
            let filtro4 = parametros.get('genero');
            let filtro5 = parametros.get('casa');
            let filtro6 = parametros.get('nacimiento');
            moduloBD.agregar(filtro1, filtro2, filtro3, filtro4, filtro5, filtro6, function (salida) {
                respuesta.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
                respuesta.write(salida);
                respuesta.end();
            });
        });
    } else if (pathname == '/borrar') {
        let datosPosts = '';
        peticion.on('data', function (data) {
            if (datosPosts.length > 1e6) {
                respuesta.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
                respuesta.write('La petición supera el tamaño permitido.');
                return respuesta.end();
            } else {
                datosPosts += data;
            }
        }).on('end', function () {
            let parametros;
            let datos;
            if (peticion.method === 'GET') {
                datos = url_peticion.query;
            } else {
                datos = datosPosts;
            }
            parametros = new URLSearchParams(datos);
            let filtro = parametros.get('filtro');
            moduloBD.borrar(filtro, function (salida) {
                respuesta.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
                respuesta.write(salida);
                respuesta.end();
            });
        });
    } else {
        respuesta.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        respuesta.write('<p>404 Página no encontrada</p>');
        respuesta.end();
    }
}).listen(8080, '127.0.0.1'), (err) => {
    //Verificamos que no halla error, si no lo mostrara por consola
    if (err) {
        return console.log('Error: ', err);
    }
    console.log('Servidor ejecutándose en 127.0.0.1:8080/');
}

