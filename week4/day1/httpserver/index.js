const http = require('http')

const server = http.createServer((request, response) => {
  console.log(`alguien pidió la url ${request.url}`)
  console.dir(request)
  if (request.url === '/') {
    response.write('ass')
    response.end()
  } else if (request.url === '/mex') {
    response.write('Ironhack Mex')
    response.end()
  } else {
    response.statusCode = 404
    response.write('404 inserte gato aqui')
    response.end()
  }
})

server.listen(3000)
