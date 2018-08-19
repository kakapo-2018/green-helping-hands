let express = require('express')
let fs = require('fs')
let server = express()

const data = require('./data0.json')

server.get('/', function(req, res){
  res.render('home')
})


server.get('/gardens', function(req, res){
    res.render('garden', data)
})


server.get('/gardens/info', function(req, res){
  res.render('info')
})

module.exports = server