/*Metodos
    -Metodo estatico: Permite ser ejecutada sin necesidad de instanciar la clase
    -Metodo Setter: Permite establecer los valores de atributos de nuestra clase
    -Metodo Getter: Permite obtener los valores de los atributos de nuestra clase
*/

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    //Atributo raza se crea nulo para luego pedirlo con el método setter
    this.raza = null;
  }

  saludar() {
    console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`);
  }

  static queEres() {
    //Método estatico
    console.log(
      "Los perros somos animales mamiferos que pertenecemos a la familia de los caninos"
    );
  }

  //Getter. Obtiene el valor.
  get getRaza() {
    return this.raza;
  }

  //Setter. Modificador o establecedor del valor.
  set setRaza(raza) {
    this.raza = raza;
  }
}

const scooby = new Perro("Scooby Doo", "Macho", "Grande");

//Metodo estatico
Perro.queEres();

//Metodos setter y getter
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);

console.log("----------------------------------------------------------------");
/*Según lo anterior haga un código que realice una clase Persona
la cual tenga un constructor con los atributos nombre, apellido, edad y nacionalidad, inicializarlos todos en null.
Por medio de setter asignarle valor a los atributos y obtener los con getter e imprimirlos por consola.

Cree un método estático que imprima por consola el siguiente mensaje:
“Hay 8.010.359.063 personas en el mundo”*/

class Persona {
  constructor(nombre, apellido, edad, nacionalidad) {
    this.nombre = null;
    this.apellido = null;
    this.edad = null;
    this.nacionalidad = null;
  }

  // Setters
  setNombre(nombre) {
    return (this.nombre = nombre);
  }
  setApellido(apellido) {
    return (this.apellido = apellido);
  }
  setEdad(edad) {
    return (this.edad = edad);
  }
  setNacionalidad(nacionalidad) {
    return (this.nacionalidad = nacionalidad);
  }

  // Getters
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
  getNacionalidad() {
    return this.nacionalidad;
  }

  // Método estático
  static cantidadPersonas() {
    return "Hay 8.010.359.063 personas en el mundo";
  }
}

// Ejemplo de uso
const persona1 = new Persona();
persona1.setNombre("Juan");
persona1.setApellido("Perez");
persona1.setEdad(30);
persona1.setNacionalidad("Colombiana");

console.log(persona1.getNombre());
console.log(persona1.getApellido());
console.log(persona1.getEdad());
console.log(persona1.getNacionalidad());

// Llamada al método estático
console.log(Persona.cantidadPersonas());
