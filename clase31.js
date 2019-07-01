const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

// RENIER: Funcion principal que se encarga de hacer la peticion al API
// Por medio de JQuery $
// La funcion recibe 2 parametros un id y un callback que no es mas que una
// funcion.
function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  // RENIER: Aca se despliega la consulta con los datos del callback ya preparados
  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

// RENIER: Creamos funciones anidadas para consumir el API,
// lo que hacemos es mandar una funcion como callback con unas instrucciones,
// que hasta ahora no entendemos, basta con conseguirnos el metodo GET de,
// JQuery para que todo cobre sentido ya que el parametro PERSONAJE sera llenado,
// con el callback del GET.
obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`)

          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})
