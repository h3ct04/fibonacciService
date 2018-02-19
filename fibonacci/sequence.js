var fib = [];
fib[0] = 0;
fib[1] = 1;


exports.seqFib = function( n ){
    // Calcula serie fibonacci hasta posición que se requiere y 
    // devuelve todos los calculos en un arreglo. 
    for( i=2; i <= (n+1); i++ )
        fib[i] = fib[i-2] + fib[i-1];

    return fib;
}

// // logs
// console.log( '------------------' );
// for( i=1; i <= n; i++ )
//     // se imprime la serie por consola, se marca con * los dos valores que se mostraran. 
//     console.log( 'Pos '+i+' = '+fib[i]+((i >= (n-1))?'*':' ') );
// console.log( '------------------' );