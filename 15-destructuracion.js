/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------");

const numeros = [1, 2, 3];
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

console.log(uno, dos, tres);

//Con destrucrturacion

console.log("--------------Con destructuración-------------------");

const [one, two, three] = numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one, two, three);

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona = {
  nombre: "Ana",
  apellido: "Santos",
  edad: 23,
};

const { nombre, apellido, edad } = persona; //deben tener el mismo nombre del la llave del objeto

console.log(nombre, apellido, edad);

console.log("----------------------------------------------");
/*Según lo anterior haga un código que tenga un arreglo con los días de la semana
y los asigne a variables con la siguiente nomenclatura diaUno, …, diaSiete,
imprima las variables por consola.*/

const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

let diaUno = "Lunes",
  diaDos = "Martes",
  diaTres = "Miercoles",
  diaCuatro = "Jueves",
  diaCinco = "Viernes",
  diaSeis = "Sabado",
  diaSiete = "Domingo";

console.log(diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete);

console.log("----------------------------------------------");
/*Realice un código que cree un objeto mascota y tenga las siguientes propiedades
  a. Nombre
  b. Edad
  c. Tamaño
  d. Color
Asigne las propiedades a variables e imprimalos por consola.*/

const mascota = {
  nombre1: "Perro",
  edad1: 2,
  tamaño: "Mediano",
  color: "Negro",
};

const { nombre1, edad1, tamaño, color } = mascota;

console.log(nombre1, edad1, tamaño, color);
