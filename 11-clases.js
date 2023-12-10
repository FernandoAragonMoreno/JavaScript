/*Clases.
Son una forma de organizar y simplificar el funcionamiento del código de una aplicación
Su sintaxis es la siguiente:
    class nombreClase{
        //propiedades y metodos
    }
Se pueden hacer objetos a partir de las clases de la siguiente forma:
    const nombreObjeto=new nombreClase()
*/

console.log("-----------------Clases----------------------");

class Animal {
  //Definicion de una clase
  /*El constructor es un metodo que se ejecuta al instanciarse la clase*/
  constructor(nombre, genero) {
    //Propiedades de la clase animal.
    this.nombre = nombre;
    this.genero = genero;
  }

  saludar() {
    //Método de la clase animal
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

//Creación de una instancia un objeto basado en la clase animal
const caliman = new Animal("Caliman", "Macho");

//Tipo de dato que es caliman
console.log(typeof caliman);
//Impresión del objeto
console.log(caliman);
//Llamado al método
caliman.saludar();

/*Herencia
Una clase hija hereda las propiedades y métodos de una clase padre. Se utiliza la palabra reservada extends.
*/

console.log("-----------------Herencia----------------------");

class Perro extends Animal {
  //La clase perro extiende de la clase animal-
  constructor(nombre, genero, tamanio) {
    //Super es un metodo que manda a llamar el constructor de la clase padre
    super(nombre, genero);
    //Propiedad de la clase perro.
    this.tamanio = tamanio;
  }

  /*Sobreescritura.
     Permite a las clases hijas hacer una implementación de un método que ha sido dado por una clase padre.
    */

  saludar() {
    //sobreescritura del metodo saludar
    console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`);
  }

  ladrar() {
    //metodo de la clase perro
    console.log("Guau Guau");
  }
}

//Instancia de un objeto basado en la clase perro
const scooby = new Perro("Scooby Doo", "Macho", "Grande");

console.log(scooby);
scooby.saludar();
scooby.ladrar();

console.log("----------------------------------------------------------------");
/*Según lo anterior haga un código que tenga la clase figura la cual:
  a. Tenga un constructor con el atributo de color.
  b. Tenga un método saludar e imprima en consola: “Hola! Soy una figura y mi color es color”
  c. Cree una instancia de la clase e imprímala por consola.*/

class Figura {
  //Definicion de una clase
  /*El constructor es un metodo que se ejecuta al instanciarse la clase*/
  constructor(color) {
    //Propiedades de la clase animal.
    this.color = color;
  }

  saludar() {
    //Método de la clase animal
    return `Hola! Soy una figura y mi color es ${this.color}`;
  }
}
const triangulo = new Figura("Café");
console.log(triangulo.saludar());

console.log("----------------------------------------------------------------");
/*Cree una clase cuadrado que herede de la clase figura la cual tenga los atributos de alto y ancho.
Sobreescriba el método saludar con el siguiente mensaje:
  “Hola! Soy un cuadrado. Mi color es color y mis medidas son altoxancho”
Cree una instancia de la clase cuadrado e imprímala por consola.*/

class Cuadrado extends Figura {
  constructor(color, alto, ancho) {
    super(color);
    this.alto = alto;
    this.ancho = ancho;
  }

  saludar() {
    //Método de la clase animal
    return `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto} x ${this.ancho}`;
  }
}
const cuadro = new Cuadrado("Café", "9", "12");
console.log(cuadro.saludar());

console.log("----------------------------------------------------------------");
/*Cree una clase circulo que herede de la clase figura la cual tenga el atributo de radio.
Sobreescriba el método saludar con el siguiente mensaje:
  “Hola! Soy un cuadrado. Mi color es color y mi radio es radio”
Cree una instancia de la clase circulo e imprímala por consola.*/

class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  saludar() {
    //Método de la clase animal
    return `Hola! Soy un Circulo. Mi color es ${this.color} y mi radio es ${this.radio}`;
  }
}
const circulo = new Circulo("Café", "9");
console.log(circulo.saludar());
