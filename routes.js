let express = require('express'),
server = express();

const data = require('./data.json')


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