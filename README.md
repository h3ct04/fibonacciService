# Fibonacci Http Service

La aplicación calcula la secuencia de fibonacci hasta el numero ingresado (n) y te entrega los valores de las posición n y n-1 de la secuencia. 

## Para Correr la Aplicación se Necesita: 
* NodeJs v6.11.2
* npm v3.10.10

## Correr Aplicación local: 

    $ git clone https://github.com/h3ct04/fibonacciService.git
    $ cd fibonacciServise
    $ npm install 
    $ npm start

ingresar a: http://localhost:3000

## Correr test:

### Prueba la lógica para calcular secuencia fibonacci:
    $npm test

Respuesta exitosa:

    > mocha --reporter spec

        TEST: función para calculo de secuencia fibonacci: 
            ✓ Chequear: Al sumar 10 numeros se obtiene multiplo de 11
            ✓ Chequear: 11 veces el 7to termino de la suma


    2 passing (18ms)





