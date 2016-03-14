'use strict'

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.set('port', (process.env.PORT || 5000))

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var cities = require('./routes/cities')
app.use('/cities', cities);


var d = new Date()
app.locals.global = {
	curyear : d.getFullYear(),
	pagetitle : "Awesome Website",
	myemail: "liyuxuanzju@gmail.com",
	socialmedia :[
		{
			name: "github",
			url: "https://github.com/yuxuanli"},
		{
			name: "linkedin",
			url: "https://www.linkedin.com/in/yuxuanli"},
	]

}

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', routes.err)


var server = app.listen(app.get('port'), function(){
	console.log("Listening on port " + app.get('port'));
});