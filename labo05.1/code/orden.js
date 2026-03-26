// NOTA GENERAL: JavaScript ejecuta el archivo de arriba a abajo.
// Lo “sorprendente” aquí viene de:
// - Hoisting de `var`: se eleva (se registra) la *declaración* al inicio del scope,
//   pero la *inicialización* se queda en su línea.
// - Hoisting de `function` (declaraciones): se elevan con su cuerpo completo.
// - `let`: es de bloque y existe una Temporal Dead Zone (TDZ) desde el inicio del
//   bloque hasta su línea de declaración; leerla antes lanza ReferenceError.

// 1) En este punto existe la variable `total` (por hoisting de `var total`),
//    pero aún no está inicializada. Su valor es `undefined`.
//    Resultado en consola: "1) total al principio: undefined"
console.log('1) total al principio:', total);

// 2) Aquí ocurre la inicialización real (la asignación). A partir de aquí `total` vale 0.
var total = 0;

// Resultado en consola: "2) total tras inicializar: 0"
console.log('2) total tras inicializar:', total);

// `sumarUno` es una *function declaration*: está disponible en todo el scope por hoisting.
// Además, tiene efecto lateral: modifica `total`.
function sumarUno(etiqueta) {
   total = total + 1;
   console.log(etiqueta, '→ total =', total);
   return total;
}

// 3) `declarada()` también es una *function declaration*, así que se puede llamar
//    antes de su definición textual.
//    Durante esta llamada:
//    - se ejecuta `sumarUno('4) dentro declarada')`
//    - `sumarUno` incrementa `total` de 0 a 1
//    - imprime primero: "4) dentro declarada → total = 1"
//    - devuelve 1, y entonces se imprime: "3) llamar a declarada: 1"
console.log('3) llamar a declarada:', declarada());

function declarada() {
   return sumarUno('4) dentro declarada');
}

try {
   // 5) `expresion` está declarada con `var`, por lo que *existe* (hoisting),
   //    pero en este punto sigue valiendo `undefined` porque la asignación
   //    (la función) ocurre más abajo.
   //    Llamar `undefined()` lanza TypeError. Se captura y se imprime "ERROR".
   console.log('5) llamar a expresion:', expresion());
} catch (e) {
   console.log('5) llamar a expresion: ERROR');
}

// 6) Recién aquí `expresion` queda inicializada con una función.
//    (Es una *function expression* asignada a una variable, no una declaración.)
var expresion = function () {
   return sumarUno('6) dentro expresion');
};

try {
   {
      // 7-8) Dentro de este bloque, `let total = 100` crea una nueva `total`.
      //      Esa `total` de bloque existe desde el inicio del bloque, pero está
      //      en TDZ hasta la línea del `let`. Por eso *leer `total` aquí* lanza
      //      ReferenceError incluso aunque exista una `total` global.
      //      (La variable global queda “sombreada” por la del bloque.)
      //      Resultado: se salta directamente al `catch` y NO se imprimen 7) ni 8).
      console.log('7) bloque antes del let:', total);
      let total = 100;
      console.log('8) bloque despues del let:', total);
   }
} catch (e) {
   console.log('7-8) bloque con let: ERROR');
}

// 9) `total` sigue valiendo 1 (solo se incrementó dentro de `declarada()`).
//    Resultado: "9) total al final: 1"
console.log('9) total al final:', total);

// 10) Incrementa de 1 a 2 e imprime: "10) sumarUno final → total = 2"
sumarUno('10) sumarUno final');

// 11) Ahora `total` vale 2.
//     Resultado: "11) total final final: 2"
console.log('11) total final final:', total);