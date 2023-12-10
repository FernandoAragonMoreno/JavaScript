/*Constantes.
Son datos que no cambian en la ejecución del código, se definen de la siguiente manera.
    const NOMBRE_CONSTANTE = valorConstante
Por ejemplo, en mátematicas el valor de PI no cambia, es cosntante. 
Vea el siguiente código*/

const PI = 3.1416;
//Otra manera de concatenar texto es: `Texto ${variable / constante}`
console.log(`El valor de PI es: ${PI}`);

/*Según lo anterior haga un código que:
    a. Defina tres constantes:
    i.El número de segundos en un minuto (60).
    ii.El número de minutos en una hora (60).
    iii.El número de horas en un día (24).*/

const SEGUNDOS = 60;
const MINUTOS = 60;
const HORAS = 24;

/*Utilizando el valor almacenado en las constantes que creo, imprima por consola el siguiente mensaje:
    “Un minuto tiene 60 segundos, una hora tiene 60 minutos y un día tiene 24 horas”*/

console.log(
  `Un minuto tiene ${SEGUNDOS} segundos, una hora tiene ${MINUTOS} minutos y un día tiene ${HORAS} horas`
);
