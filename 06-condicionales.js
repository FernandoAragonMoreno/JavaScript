/*if/else
Permite que se realice una instrucción u otra de acuerdo a la evaluación de una condición. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
En la condicion se utilizan operadores de comparación.
*/

console.log("------------------------if/else---------------------------");
let edad = 26;

if (edad >= 18) {
    //Inicio de la condicion
    console.log("Eres mayor de edad, preparate:)"); //Instruccion si se cumple
} else {
    console.log("Eres menor de edad, disfruta tu vida:)"); //Instruccion si no se cumple.
}

/*Condiciones anidadas
Permite que se realice una instrucción u otra de acuerdo a la evaluación de varias condiciones. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else if (condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
*/

console.log("-----------------Condicional anidada----------------------");

let hora = 19;

/*Devuelve un saludo dependiendo la hora:
    -De 24 a las 05: Dejen dormir!
    -De 06 a las 11: Buenos días!
    -De 12 a las 18: Buenas tardes!
    -De 19 a las 23: Buenas noches!*/

if (hora >= 0 && hora <= 5) {
    //Primera condición
    console.log("Dejen dormir!");
} else if (hora >= 6 && hora <= 11) {
    //Segunda condición
    console.log("Buenos días!");
} else if (hora >= 12 && hora <= 18) {
    //Tercera condición
    console.log("Buenas tardes!");
} else {
    console.log("Buenas noches!"); //Instruccion si no se cumple ninguna condición
}

/*Operador ternario
Se suelen usar para condicones simples con la siguiente estructura
    (condicion) ? InstruccionVerdadero : InstruccionFalso
Para entender mejor vea el siguiente ejemplo*/

console.log("-----------------Operador ternario----------------------");

let a = 8,
    b = 3;

let esMayor = a > b ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`;
console.log(esMayor);

/*Switch - Case
Estructura de control condicional que según una expresión evalua distintos posibles casos. Su sistaxis es:
    switch(expresion){
        case valor1:
            //instruccion
            break;
        case valor2:
            //instruccion 2
            break;
        default:
            //instruccion si ningun caso se cumple
            break;
    }
El siguiente ejmplo devuelve un día dependiendo un número dado
    0 Domingo
    1 Lunes
    2 Martes
    3 Miercoles
    4 Jueves
    5 Viernes
    6 Sabado*/

console.log("-----------------switch/case----------------------");

let dia = 3;

switch (dia) {
    case 0:
        console.log("El día es domingo");
        break;
    case 1:
        console.log("El día es lunes");
        break;
    case 2:
        console.log("El día es martes");
        break;
    case 3:
        console.log("El día es miercoles");
        break;
    case 4:
        console.log("El día es jueves");
        break;
    case 5:
        console.log("El día es viernes");
        break;
    case 6:
        console.log("El día essabado");
        break;

    default:
        console.log("el día no existe");
        break;
}

/*Según lo anterior haga un código que dados tres números, evalúe cual es el número mayor. Imprimalos en consola ordenados.*/

let a1 = 1,
    b1 = 7,
    c1 = 5,
    mayor;

if (a1 > b1 && a1 > c1) {
    // Si a es mayor que b y c, asignar a a la variable mayor
    mayor = a1;
} else if (b1 > a1 && b1 > c1) {
    // Si b es mayor que a y c, asignar b a la variable mayor
    mayor = b1;
} else {
    // Si no, asignar c a la variable mayor
    mayor = c1;
}

console.log(`El número mayor es: ${mayor}`);

/*Haga un código que evalúe si un número es par o impar.*/

let numero = 10;

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

/*Realice un código que resuelva el siguiente planeamiento:
  a. Una tienda comenzó una oferta para ventas al
    i.20% Para compras mayores a 10 docenas.
    ii.15% Para compras mayores o iguales a 5 docenas.
    iii.10% Para compras mayores a 1 docena.

    Se desea determinar cuál es descuento dado una cantidad de decenas que se van a comprar.
    Imprima tambien cual es el valor de la compra si cada docena cuesta 60.000*/

let valor = 60000;
let cantidad = 1;
let vSinDescuento;
let descuento;
let vConDescuento;

if (cantidad > 10) {
    descuento = valor * cantidad * 0.2;
} else if (cantidad >= 5 && cantidad <= 10) {
    descuento = valor * cantidad * 0.15;
} else if (cantidad > 1 && cantidad < 5) {
    descuento = valor * cantidad * 0.1;
} else if (cantidad <= 1) {
    descuento = valor * cantidad * 0;
}
vSinDescuento = cantidad * valor;
vConDescuento = vSinDescuento - descuento;

console.log(`El valor de Sin Descuento es: ${vSinDescuento}`);
console.log(`El valor del Descuento es: ${descuento}`);
console.log(`El valor de Con Descuento es: ${vConDescuento}`);

// Constante para el valor
const VALOR1 = 60000;
// Variable para la cantidad
let cantidad1 = 10;
// Variables para el valor sin descuento, el descuento y el valor con descuento
let vSinDescuento1;
let descuento1;
let vConDescuento1;

// Estructura switch para asignar el descuento según la cantidad
switch (true) {
    case cantidad1 > 10:
        descuento1 = 0.2;
        break;
    case cantidad1 >= 5:
        descuento1 = 0.15;
        break;
    case cantidad1 > 1:
        descuento1 = 0.1;
        break;
    default:
        descuento1 = 0;
}

// Cálculo del valor sin descuento, el descuento y el valor con descuento
vSinDescuento1 = cantidad1 * VALOR1;
descuento1 = descuento1 ? vSinDescuento1 * descuento1 : 0; // Operador ternario
vConDescuento1 = vSinDescuento1 - descuento1;

// Mostrar los resultados usando plantillas de cadena de texto
console.log(`El valor de Sin Descuento es: ${vSinDescuento1}`);
console.log(`El valor del Descuento es: ${descuento1}`);
console.log(`El valor de Con Descuento es: ${vConDescuento1}`);

let valor2 = 60000;
let cantidad2 = 20;
let descuento2;

if (cantidad2 > 10) {
    descuento2 = 0.2;
} else if (cantidad2 >= 5) {
    descuento2 = 0.15;
} else if (cantidad2 > 1) {
    descuento2 = 0.1;
} else {
    descuento2 = 0;
}

let vSinDescuento2 = cantidad2 * valor2;
let vConDescuento2 = vSinDescuento2 * (1 - descuento2);

console.log(`El valor Sin Descuento es: ${vSinDescuento2}`);
console.log(`El valor del Descuento es: ${descuento2 * 100}%`);
console.log(`El valor Con Descuento es: ${vConDescuento2}`);
