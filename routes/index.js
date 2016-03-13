exports.index = function(req, res){
	res.render('default', {
		title: 'Home',
		users: ['YuxuanLi', "Cristina", "Brett", "Aaron"],
	});

};

exports.about = function(req, res){
	res.render('default', {
		title: 'About Us'
	});
};


exports.err = function(req, res){
	res.render('error', {
		title: 'Page Not Exist',

	});
};

// var json = {
// 		title: 'Block',
// 		cities: [
// 		{
// 			city: "Chongqing",
// 			des: "Where Cristina live now"
// 		},
// 		{
// 			city: "Los Angeles",
// 			des: "Where I live now"
// 		},
// 		{
// 			city: "Taiyuan",
// 			des: "Where my hometown is"
// 		},
// 		]
// 	}
// exports.block = function(req, res){
	
// 	var cityName = req.query.city;
// 	var desText = req.query.des;

	
// 	json.cities.push({city: cityName, des: desText})
// 	res.render('block', json);
// };