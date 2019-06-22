var x = 4, y = '4'

var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}

// var otraPersona = sacha

// Un objeto apunta a una posicion de memoria en la RAM
// Al comparar objetos, debemos tomar en cuenta que estamos comparando sus posiciones
// en memoria RAM, no sus valores como se ve a simple vista. sacha == otraPersona


// El parametro de comparacion === es mas preciso porque 
// evalua que las variables sean estrictamente igual tanto en estructura como en datos

// Ejemplo:
// var x = 4, y = '4'
// Al compararlo con === retornaria FALSE xq no son iguales en cuanto a 
// estructura de datos.