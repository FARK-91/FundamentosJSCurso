const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  // RENIER: Retornamos una promesa la cual se encargara de buscar,
  // y distribuir los datos de forma correcta, con ayuda de JQuerty $ para
  // consumir el API.
  // La promesa siempre recibe los parametros resolve y reject,
  // ambos con instrucciones distintas dependiendo de la respuesta,
  // que hayan obtenido.
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    // RENIER: Hacemos request al API
    $
      .get(url, opts, function (data) {
        // Si se ejecuta el request de forma correcta, enviamos del parametro,
        // data a la funcion .then
        resolve(data)
      })
      // De ocurrir un error en el request, mandamos el id a la cuncion .catch
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

// RENIER: LLamamos la funcion obtenerPersonaje
obtenerPersonaje(1)
// Accedemos a las respuesta con .then y .catch con ellos,
// podemos anticipar una accion para c/u si ocurre uno o el otro.
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)
