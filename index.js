// index.js

var express = require('express');
// var seq = require('../fibonacci/sequence')
var app = express(); 
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    // res.sendFile( __dirname + '/views/index.html' );
    res.send('<html><body>'
		      + '<h1>Serie Fibonacci</h1>'
		      + '<form method="get" action="/position-init">'
		      + '<label for="nombre">Posición de serie: </label>'
		      + '<input type="text" name="position">'	
		      + '<input type="submit" value="Enviar"/>'
		      + '</form>'
		      + '</body></html>');
});

app.get('/position-init', function (req, res) {
    
    var n = req.query.position || ' ';
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    // calcula serie fibonacci hasta posición que se requiere. 
    for(i=2; i<=(n+1); i++)
        fib[i] = fib[i-2] + fib[i-1];

    
    
    if( fib[n] > 0 ){
        res.send('<html><body>'
		      + '<h1>Serie Fibonacci</h1>'
		      + '<form method="get" action="/position-init">'
		      + '<label for="nombre">Posición de serie: </label>'
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
		      + '<form method="get" action="/position-init">'
		      + '<label for="nombre">Posición de serie: </label>'
		      + '<input type="number" name="position">'	
		      + '<input type="submit" value="Enviar"/>'
              + '</form>'
              + '</br>'
              + '</br>'
              + '<h2> El numero tiene que ser mayor o igual a 1 </h2>'
		      + '</body></html>');
        
    }
});

var server = app.listen(3000, function () {
    console.log("Node server is running on PORT 3000..");
});


