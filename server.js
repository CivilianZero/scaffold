var express = require('express'),
	app = express(),
	bodyParser= require('body-parser'),
	port = 3000;

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
// Remove this when we start building our Sass
app.use(express.static(__dirname + '/src/css'));

app.listen(port);