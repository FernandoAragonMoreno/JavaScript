/*While.
Permite ejecutar un código mientras se cumpla una condición.
Como se ve a continuación*/

console.log("-----------------Condicional while----------------------");

let cont = 0;

/*La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10*/

while (cont < 10) {
  console.log(`El while va en ${cont}`);
  cont++;
}

/*For
Permite ejecutar un código un número determinado de veces.
Como se ve a continuación*/

/*La variable i aumenta de uno en uno siempre que sea mejor que 10*/

console.log("-----------------Condicional for----------------------");

for (let i = 0; i < 10; i++) {
  console.log(`El for va en ${i}`);
}

console.log("-----------------------------------------------------");
/*Según lo anterior haga un código que:
    a. Imprima los números del 10 al 1.
    b. Imprima los números pares.*/

let n = 10;
while (n >= 0) {
  console.log(`El for ${n}`);
  n--;
}

let n1 = 10;
while (n1 >= 1) {
  if (n1 % 2 == 0) {
    console.log(`Número par ${n1}`);
  }
  n1--;
}

console.log("-----------------------------------------------------");
/*Realice un código que sume los números del 1 al 5 e imprima el resultado.*/
let n2 = 1;
let suma = 0;
while (n2 <= 5) {
  suma += n2;
  n2++;
}
console.log(`La suma es: ${suma}`);

console.log("-----------------------------------------------------");
/*Haga un código con while que imprima la tabla de multiplicar del 7.*/
let n3 = 0;
while (n3 <= 10) {
  console.log(`7 * ${n3} = ${n3 * 7}`);
  n3++;
}
