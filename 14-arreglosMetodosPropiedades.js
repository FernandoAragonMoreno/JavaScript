/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------");
const a = Array(100).fill(false);
console.log(a);

const colores = ["Rojo", "Azul", "Gris"];
console.log(colores);

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------");
colores.push("Verde");
console.log(colores);

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------");
colores.pop();
console.log(colores);

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------");
const copiaColores = colores.slice();
console.log(copiaColores);

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------");
console.log(colores.length);

console.log("----------------------------------------------");
/*Según lo anterior haga un código que por medio de un ciclo llene un arreglo
con los números del 1 al 100 en imprimalo en pantalla*/

for (let i = 1; i <= 100; i++) {
  colores.push(i);
}
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log("----------------------------------------------");
/*Haga un código que guarde los números pares del 1 al 100 en un arreglo e imprimalo en pantalla.*/

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    colores.push(i);
  }
}
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log("----------------------------------------------");
/*Desarrolle un código que reciba un arreglo con 3 números, los ordene e imprima en pantalla en orden.*/

const numeros = [70, 20, 30];
numeros.sort((a, b) => a - b);
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
