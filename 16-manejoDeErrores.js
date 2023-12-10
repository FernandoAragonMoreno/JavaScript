/*Manejo de errores.
El manejo de errores con Javascript se realiza por medio de la declaración try…catch, el try es utilizado para definir un bloque de instrucciones que deben ser ejecutadas y en caso de que se presente algún error, se ejecutan las instrucciones definidas en el bloque catch.
*/

//Ejemplo sin error

console.log("-----------------Ejemplo sin error----------------------");

try {
  //Si no hay ningun error se ejecuta el bloque try
  console.log("Inicio");
  let suma = 15 + 99;
  console.log(`El resultado es ${suma}`);
} catch (err) {
  //Si encuentra un error ejecuta el siguiente codigo
  console.log("Hay un error!");
}

//Ejemplo con error

console.log("-----------------Ejemplo con error----------------------");

try {
  console.log("Inicio");
  let suma = 15 + 99;
  console.log(`El resultado es ${resultado}`);
  //Variable resultado no definida
} catch (err) {
  console.log("Hay un error!");
}

/*Finally: Es el bloque de código que siempre se ejecuta al finalizar el try..catch*/

console.log("-----------------Bloque finally----------------------");

try {
  console.log("En el try se agrega el codigo a evaluar");
  noExiste; //genera un error porque noExiste no esta definida
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch captura cualquier error que surga en el try");
  console.log(error); //imprime el error
} finally {
  console.log("Finally se ejecuta siempre al final de un bloque try-catch");
}

//Personalizacion de mensajes de error

console.log(
  "-----------------Personalización mensajes de error----------------------"
);

try {
  let numero = "y";
  if (isNaN(numero)) {
    //El metodo isNaN() evalua si la variable es de tipo numererico o no
    //Definición del nuevo mensaje de error  throw new Error()
    throw new Error("El caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente ${error}`);
}

console.log("----------------------------------------------");
/*Según lo anterior haga un código reciba números con manejo de errores.
Si el valor ingresado NO es numérico debe enviar el mensaje:
“¡Cuidado! No se reciben datos no numéricos.”
Siempre al finalizar de ejecutar el código debe mostrar el mensaje:
“Análisis de datos terminado.”*/

try {
  let numero = "a15";
  if (isNaN(numero)) {
    //El metodo isNaN() evalua si la variable es de tipo numererico o no
    //Definición del nuevo mensaje de error  throw new Error()
    throw new Error("El caracter introducido NO es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente ${error}`);
} finally {
  console.log("Análisis de datos terminado.");
}

console.log("----------------------------------------------");
/*Realice un código que realice una calculadora científica con las siguientes operaciones:
  a. Suma
  b. Resta
  c. Multiplicación
  d. División.
  e. Potencia.
  f. Raíz cuadrada.

Que tenga manejos de errores para las operaciones teniendo en cuenta que:
  -La división por cero no es posible.
  -La calculadora solo acepta entradas numéricas*/

function calculadora(operacion, a, b) {
  try {
    if (typeof a != "number" || typeof b != "number") {
      throw new Error("No se reciben datos numéricos");
    }
    switch (operacion) {
      case "suma":
        return a + b;
      case "resta":
        return a - b;
      case "multiplicacion":
        return a * b;
      case "division":
        if (b == 0) {
          throw new Error("No se puede dividir en cero");
        }
        return a / b;
      case "potencia":
        return Math.pow(a, b);
      case "raizCuadrada":
        return Math.sqrt(a);
      default:
        throw new Error("Operación no valida");
    }
  } catch (error) {
    return error.message;
  }
}

console.log(calculadora("suma", "10", 20));
console.log(calculadora("resta", "10", 20));
console.log(calculadora("multiplicacion", "10", 20));
console.log(calculadora("division", 10, 0));
console.log(calculadora("potencia", 10, -1));
console.log(calculadora("raizCuadrada", 0));
