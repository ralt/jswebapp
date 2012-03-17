#!/usr/bin/env node
var static = require('node-static')
var port = 8080

var file = new(static.Server)('./static')

require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response)
        console.log("Client hit")
    })
}).listen(port)
console.log("Server listening on port " + port)
