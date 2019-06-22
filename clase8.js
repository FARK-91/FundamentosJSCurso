var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

// Cuando pasamos un objeto como parametro de una funcion
// este se pasa como parametro por referencia, lo que quiere
// decir que si cambiamos el valos de un atributo dentro de la funcion
// dicho atributo tambien se vera afectado una vez fuera de la funcion.
function cumpleanos(persona) {
  // Para devolver un nuevo objeto:
  //Nota dentro de las llaves se definen las llaves y valores del nuevo objeto.
  return {
    ...persona,
    edad: persona.edad + 1,
    nuevo_parametro : 'Nuevo valor'
  }

  // Para solo alterar un parametro utilizo la siguiente sentencia sin el return:
  // persona.edad += 1
}
