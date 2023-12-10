/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un llamado a la función, independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

console.log("-----------------------------------------------------");

function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno

console.log("-----------------------------------------------------");

function saludar(nombre, edad) {
  return `Hola mi nombre es ${nombre} y mi edad es ${edad}`;
}

console.log(saludar("Amparo", 39));

//Asignación de valores por defecto a una funciones

console.log("-----------------------------------------------------");

function carrera(nombre = "desconocido", carrera = "desconocido") {
  return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`);
}

carrera("Juan", "desarrollo de web");
carrera(); //Cuando no se agrega parametro muestra el valor asignado en la funcion

console.log("-----------------------------------------------------");
/*Según lo anterior haga un código que haga una función declarada para cada una de las siguientes operaciones:
  a. Suma.
  b. Resta.
  c. Multiplicación.
  d. División.*/

function suma(a, b) {
  return a + b;
}
console.log(suma(5, 3));

function resta(a, b) {
  return a - b;
}
console.log(resta(5, 3));

function mult(a, b) {
  return a * b;
}
console.log(mult(5, 3));

function div(a, b) {
  return a / b;
}
console.log(div(5, 3));

console.log("-----------------------------------------------------");
/*Construir una función que convierta dólares a pesos colombianos y otra función que convierta pesos colombianos a dólares.*/
function dolar(pesos) {
  return pesos / 3991;
}
console.log(dolar(10000));

function peso(dolares) {
  return dolares * 3991;
}
console.log(peso(10));

console.log("-----------------------------------------------------");
/*Construir un código que tenga una función para cada uno de los siguientes cálculos:
  a. Área de un cuadrado.
  b. Área de un círculo.
  c. Área de un triángulo.*/

function areaCuadrado(lado) {
  return lado * lado;
}
console.log(areaCuadrado(5));

function areaCirculo(radio) {
  return Math.PI * (radio * radio);
}
console.log(areaCirculo(5));

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log(areaTriangulo(5, 5));
