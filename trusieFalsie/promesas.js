const miPromesa = new Promise((resolve, reject) => {
  // Simulando una tarea asincrónica, por ejemplo, una solicitud de red
  setTimeout(() => {
    const exito = true
    if (exito) {
      resolve('Éxito: Datos obtenidos correctamente')
    } else {
      reject('Error: No se pudieron obtener los datos')
    }
  }, 2000) // Simulación de 2 segundos de espera
})

miPromesa
  .then((resultado) => {
    console.log(resultado) // "Éxito: Datos obtenidos correctamente"
  })
  .catch((error) => {
    console.error(error) // "Error: No se pudieron obtener los datos"
  })

async function obtenerDatos() {
  // Código asincrónico
  const resultado = await algunaOperacionAsincronica()
  return resultado
}

// fetch(url, options);

fetch('https://example.com/api/login', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})

fetch('https://example.com/api/endpoint')
  .then((response) => {
    // procesar la respuesta del servidor
  })
  .catch((error) => {
    // manejar cualquier error
  })
