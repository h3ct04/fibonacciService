// index.js

var express = require('express');
var seq = require('../fibonacci/sequence');
var app = express(); 
var bodyParser = require("body-parser");

// Se inicializa el arreglo para guardar la secuencia.
var fib = [];

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    // res.sendFile( __dirname + '/views/index.html' );
    res.send(   '<html><body>'
                + '<h1>Serie Fibonacci</h1>'
                + '<form method="post" action="/position">'
                + '<label for="tags">Posición de serie: </label>'
                + '<input type="number" name="position">'	
                + '<input type="submit" value="Enviar"/>'
                + '</form>');
});

app.post('/position', function (req, res) {
    
    // Se toma el valor de la posición se que se mostrara. 
    var n = req.body.position || ' ';
    fib = seq.seqFib( n );
    // Se Muertra la posición n-1 y n si n es mayor a 0
    if( fib[n] > 0 ){
        res.send('<html><body>'
		      + '<h1>Serie Fibonacci</h1>'
		      + '<form method="post" action="/position">'
		      + '<label for="tags">Posición de serie: </label>'
		      + '<input type="number" name="position">'	
		      + '<input type="submit" value="Enviar"/>'
              + '</form>'
              + '</br>'
              + '</br>'
              + 'Posición '+(n-1)+' : ' + fib[n-1]
              + '</br>Posición '+n+' : '+fib[n]
		      + '</body></html>');
        
    }else{
        res.send('<html><body>'
		      + '<h1>Serie Fibonacci</h1>'
		      + '<form method="get" action="/position">'
		      + '<label for="tags">Posición de serie: </label>'
		      + '<input type="number" name="position">'	
		      + '<input type="submit" value="Enviar"/>'
              + '</form>'
              + '</br>'
              + '</br>'
              + 'ERROR: La posición tiene que ser mayor o igual a 1.'
		      + '</body></html>');
        
    }
});

var server = app.listen(3000, function () {
    console.log("Node server is running on PORT 3000..");
});


