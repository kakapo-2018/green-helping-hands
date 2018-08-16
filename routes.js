let express = require('express'),
server = express();

server.get('/', function(req, res) {
	res.sendFile('index')
})

server.get('/garden', function(req, res){
    res.send('gardenView')

})

module.exports = server