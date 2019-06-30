// RENIER: Definimos una constante para acceder al URL del API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  // RENIER: Para conocer los argumentos de respuesta podemos imprimir los
  // argumentos de la Funcion
  console.log(arguments)
  console.log(`Hola yo soy, ${persona.name}`)
  console.log(`tengo el cabello de color, ${persona.hair_color}`)
}

// RENIER: Parametros de un $get
// 1) URL del API ---> https://swapi.co/api/
// 2) crossDomain: true
// 3) Funcion de respuesta, el cual devuelve la data obtenida del API,
//    el status de la respuesta (exito o fallido) y  por ultimo el objeto Jquery.
$.get(lukeUrl, opts, onPeopleResponse)
