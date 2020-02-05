//Así se importa un core module, en éste caso 'http' que sirve para ejecutar Javascript del lado del servidor
var http = require("http");

var log = require("./modules/myLog"); //El ./ es porque la carpeta modules está a la misma altura que este
//var firebase = require('../libs/firebase'); //Ejemplo para llegar a carpeta libs archivo firebase.js con ..

//var{prueba} = require("./modules/myLog"); //Ejemplo de importación parcial de función prueba de myLog.js

var { countries } = require("countries-list"); //Importación parcial de paquete 3rd party: countries-list

var server = http.createServer(function(request, response) {
  //request recibe datos de la conexión entrante, por parte del cliente
  if (request.url == "/") {
    
    //response es para enviar info al cliente, Ej. status codes de Success/Fail
    response.writeHead(200, { "Content-Type": "text/html" }); //Código 200 = Successful Connection
    response.write("<html><body><p>Home Page</p></body></html>");
    response.end();
  } else if (request.url == "/exit") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>Hasta Luego!</p></body></html>");
    response.end();
  } else if (request.url == "/info") {
    var result = log.info(request.url);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(result);
    response.end();
  } else if (request.url == "/error") {
    var result = log.error(request.url + ": URL de Sitio de Error"); //Ejemplo de concatenación del param de texto que envío
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(result);
    response.end();
  } else if (request.url == "/pais") {  //Ejemplo de importación de datos de countries-list
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries.MX));
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" }); //Código 404 = Failed Connection
    response.write("<html><body><p>Not Found</p></body></html>");
    response.end();
  }
});

server.listen(4000); //Aquí especifico que quiero que el server se ejecute en el puerto 4000

console.log("Ejecutando en puerto 4000");

/*
Para ver el resultado de 'Home' en mi server local por ejemplo, en mi navegador debo poner la URL:
localhost:4000  porque es el puerto que definí arriba para estar escuchando
*/
