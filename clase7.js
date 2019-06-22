// Esto es un objeto en JS
// Muy parecido a un dic en Python {Key: Value}
var sacha = {
  // Esto un atributo del objeto
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

var renier = {
  nombre: 'Renier',
  apellido: 'Ferrer',
  edad: 28
}

// Como acceder a los datos de un objeto
function imprimirNombreEnMayusculas(persona) {
  // Se crea una variable y dentro de las llaves se invoca la clave o atributo del objeto
  // Luego el iigual se invoca al objeto por medio del parametro persona.
  var { nombre } = persona
  console.log(nombre.toUpperCase())
  var { apellido } = persona
  console.log(apellido.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

function imprimirNombreYEdad(datos) {
  // Hola, me llamo Sacha y tengo 28 años
  // Hola, me llamo Darío y tengo 27 años
  var {nombre,edad} = datos
  var some_text = 'Hola, me llamo ' + nombre + ', tengo '+ edad + ' años.'
  console.log(some_text)
}

imprimirNombreYEdad(renier)