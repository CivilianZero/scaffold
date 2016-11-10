var express = require('express'),
	lowdb = require('lowdb'),
	fileAsync = require('lowdb/lib/file-async'),
	shortid = require('shortid'),
	app = express(),
	bodyParser= require('body-parser'),
	port = 3000;

var db = lowdb('db.json', { storage: fileAsync });

db.defaults({
	// any default collections (Arrays)
}).value();

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
// Remove this when we start building our Sass
app.use(express.static(__dirname + '/src/css'));

app.listen(port);