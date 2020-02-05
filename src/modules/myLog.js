function info(text){
    console.log('INFO:',text);
    return text;
}

function error(text){
    console.log('ERROR:',text);
    return text;
}

module.exports = {info,error};      //Ésto es una exportación global


//A continuación una exportación parcial de una función (se hace de manera individual)
module.exports.prueba = function prueba(text){
    console.log('Esto es una prueba:',text);
    return text;
}