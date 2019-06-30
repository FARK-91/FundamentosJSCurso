// RENIER: Esto es un prototipo o constructor
function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Sacha', 'Lifszyc')
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')

// Practicando

// #PlatziReto 1.8m
// Modifico el prototipo original
function Persona2(nombre, apellido, alt) {
  this.nombre = nombre
  this.apellido = apellido
  this.alto = alt
}
// Modifico la funcion saludar
Persona2.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  renier.MiEstatura()
}
// Creo mi funcion MiEstatura
const alta = 'soy una persona de estatura alta.'
const baja = 'soy una persona de estatura baja.'
Persona2.prototype.MiEstatura = function () {
  if (this.alto >= 1.8){
    console.log(`Mi estatura es de ${this.alto},
      Segun los parametros establecidos ${alta}..`)
  }else {
    console.log(`Mi estatura es de ${this.alto},
      Segun los parametros establecidos ${baja}..`)
  }
}

var renier = new Persona2('Renier', 'Ferrer', '1.75')
