class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

// RENIER: Este es el modo de heredar una clase existente
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura, skills) {
    // RENIER: Inmediatamente despues de declarar el constructor, procedemos a
    // llamar el medoto super para luego desarrollar nuestra herencia.
    // ANTES DEL SUPER NO PUEDES ESCRIBIR NINGUNA LINEA DE CODIGO
    super(nombre, apellido, altura)
    this.skills = skills
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
  }
}


// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)
