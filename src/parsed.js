var http = require("http");
var url = require("url");
var querystring = require("querystring");

var { countries } = require("countries-list"); 

var server = http.createServer(function(request, response) {

    var parsed = url.parse(request.url);    //Ésto es lo que genera todas las filas de info de la URL
    
    var pathname = parsed.pathname;     //Esta variable sirve para reemplazar el `request.url`de los ifs de serverConnection.js
    
    var query = querystring.parse(parsed.query);    //Aquí jalo solo el valor de query del parseo

    console.log("parsed:",parsed);
    console.log("path:",pathname);
    console.log("query",query);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code]));  //Aquí reemplacé el hardcodeo de `countries.MX` con `countries[query.code]` para asignar el pais que quiera
    response.end();
    
});

server.listen(4000);

console.log("Ejecutando en puerto 4000");