let express = require('express'),
server = express();


server.get('/', function(req, res){
    res.render('home')

})

// server.get('/', function(req, res) {
// 	res.sendFile('index')
// })

server.get('/gardens', function(req, res){
    res.render('garden')

})

module.exports = server