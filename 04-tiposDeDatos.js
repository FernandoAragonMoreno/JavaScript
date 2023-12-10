/*Las variables y constentes pueden tener como valor:
    -Cadenas de textos (string)
    -Números
    -Boolenanos
Las variables tambien pueden ser Undefined cuando no se les ha asignado ningun valor.
Vea las siguientes instrucciones de código.*/

/*Para definir una cadena de texto se puede hacer con comillas dobles o sencillas de la siguiente manera:
    -let / var / const = "cadena de texto"
    -let / var / const = 'cadena de texto'*/
let cadenaTexto = "Hola mundo!";
console.log(cadenaTexto);

//Las cadenas de texto se pueden concatenar en una variable con un +, de la siguiente manera.

let nombre = "Camilo";
cadenaTexto = "Hola!" + " Mi nombre es " + nombre;
console.log(cadenaTexto);

/*Para definir un tipo número no se agregan comillas dobles ni sencillas. Como se ve a continuación*/

let edad = 23;
console.log(`${nombre} tiene ${edad} años`);

//Para definir booleanos se utilizan las palabras reservadas true o false según sea el caso.

let verdadero = true;
console.log("El veradero se define con", verdadero);

//Cuando no se asigna ningun valor es de tipo undefined
let color;
console.log(`Mi color favorito es ${color}`);

/*Según lo anterior haga un código que:
  a. Reciba tenga variables que guarden los siguientes datos:
    i.Nombre.
    ii.Apellido.
    iii.Edad.
    iv.Canción favorita (si no tiene puede dejarlo sin definir undefined)
    v.Respuesta: en respuesta se debe recibir un true o false dependiendo si entendió el tema de los tipos de datos en JavaScript.*/

let nombre1 = "Fernando";
let apellido1 = "Aragón";
let edad1 = 40;
let cancion1 = "Canción Animal";
let respuesta1 = true;

/*b. Imprimir el siguiente mensaje.
  “Hola! Mi nombre es nombre apellido y tengo edad años, mi canción favorita es cancion y la respuesta es true/false”*/

console.log(
  `Hola! Mi nombre es ${nombre1} ${apellido1} y tengo ${edad1} años, mi canción favorita es ${cancion1} y la respuesta es ${respuesta1}`
);
