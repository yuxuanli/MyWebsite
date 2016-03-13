// var Person = function(age, birth, living){
// 	this.age = age;
// 	this.birth = birth;
// 	this.living = living;
// }

// // var p  = new Person(10, 20, 30)

// var p = Person(10, 20, 30);
// // console.log(p)

// console.log(p)

// var s = new String("foo")
// console.log(s=="foo")

var data = {"title": "City",
			"cities":[
				{name: "Chongqing",
				des: "Where Cristina live now"},
				{name: "Los Angeles" ,
				des: "Where I live now"},
				{name: "Taiyuan",
				des: "Where my home town is"}
			]
		};

data.cities.push({"11":"22"});
data.cities.splice(0,2);

console.log(data);

console.log(encodeURIComponent("Los Angeles"));