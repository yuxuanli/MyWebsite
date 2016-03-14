var express= require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var data = {"title": "City",
			"cities":[
				{
					name: "Chongqing",
					des: "Where Cristina live now"},
				{
					name: "Los Angeles" ,
					des: "Where I live now"},
				{
					name: "Taiyuan",
					des: "Where my home town is"}
			]
		};
// var data = {
// 	"Chongqing" : "1",
// 	"Los Angeles": "2",
// 	"Taiyuan": "3"

// }


router.route('/')
	.get(function(req, res){
		res.render('cities', data);
	})
	.post(parseUrlencoded, function(req, res){
		var cityName = req.body.city;
		
		var desText = req.body.des;
		data.cities.push({name: cityName, des: desText});
		res.sendStatus(200);
	});

router.route('/:name')
	// .all(function(req, res, next){
	// 	var name = req.params.name;
		
	// 	//req.cityName = name.toLowerCase();
	// 	next()
	// })
	.delete(function(req, res){
		console.log("Delete===========>" + req.params.name);
		console.log(data.cities);
		for (var i=0 ; i<data.cities.length; i++){
			if (data.cities[i].name === req.params.name){
				data.cities.splice(i,1);
				break;
			}
		}
		console.log(data.cities);
		res.sendStatus(204);
		
	});

module.exports = router;