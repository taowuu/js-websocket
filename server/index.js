const ws = require('ws')
const server = new ws.Server({ port:8000 })

const log = function () {
  console.log.apply(console, arguments)
}

const handleOpen = function() {
  log('ws handleOpen')
}

const handleClose = function() {
  log('ws handleClose')

}

const handleError = function() {
  log('ws handleError')

}

const handleMessage = function(msg) {
  log(msg)
  server.clients.forEach(function(c) {
    c.send(msg)
  })
}

const handleConnection = function(ws) {
  log('ws handleConnection')
  ws.on('message', handleMessage)
}

const bindEvents = function() {
  server.on('open', handleOpen)
  server.on('close', handleClose)
  server.on('error', handleError)
  server.on('connection', handleConnection)
  
}

const __mian = function() {
  bindEvents()
}

__mian()