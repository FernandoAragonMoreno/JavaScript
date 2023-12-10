/*Funciones expresadas o anonimas.
Las funciones expresadas hacen parte del ámbito concreto del programa, es decir, estas funciones no existen hasta que la expresión que las genera es ejecutada. Se consideran una buena practica de programación para tener el código ordenado*/

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function () {
  return console.log("Esta es una función expresada!");
};

funcionExpresada();

/*Funciones anonimas autoejecutables (IIFE).
Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
(function (parametros){//contenido de la funcion})(parametros);
*/

console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");

(function () {
  console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (c) {
  c.log("Mi segunda funcion anonima autoejecutable (IIFE) con parametros");
})(console);

console.log("----------------------------------------------------------------");
/*Según lo anterior haga un código que con funciones expresadas haga una función relacion(a, b)
  que a partir de dos números cumpla lo siguiente:
    a. Si el primer número es mayor que el segundo, debe devolver 1.
    b. Si el primer número es menor que el segundo, debe devolver -1.
    c. Si ambos números son iguales, debe devolver un 0.*/

function relacion(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

console.log(relacion(5, 8));
