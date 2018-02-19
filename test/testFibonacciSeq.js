var assert    = require("chai").assert;
var fibonacci = require("../fibonacci/sequence");

// Variables para generar secuencia.
var seq = [];
var num = 0;
var min = 11;
var max = 50;

// Se genera un numero aleatorio para las pruebas.
var random = Math.floor(Math.random() * (max - min)) + min;
var seven = (random - 11) + 7

// Se calcula la secuencia de números fibonacci hasta el numero generado aleatoriamente
seq   = fibonacci.seqFib( random );

// Se suman los 10 ultimos terminos de la secuencia, para generar las pruebas. 
for (i = (random - 10); i < random; i++){
    num = num + seq[i];
}

describe("TEST: funcion para calculo de secuencia fibonacci: ", function() {
    // Particularidad de la secuencia: Si se suman 10 terminos de la secuencia el resultado es multiplo de 11
    it("Chequear: Al sumar 10 numeros se obtiene multiplo de 11", function() {
                      
        result = num % 11;
        assert.equal(result, 0 );			
    });
    // // Particularidad de la secuencia: El resultado de la suma es 11 veces el 7mo valor de los 10 sumados. 
    it("Chequear: 11 veces el 7to termino de la suma", function() {
                      
        result = num / 11;
        assert.equal(result, seq[ seven ] );
        			
	});
});