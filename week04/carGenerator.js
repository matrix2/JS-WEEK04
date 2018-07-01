/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];
	const cars3060 = [];
	const carswITHnOTlightyellow = [];
	const Dansker = [];
	
    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
		const car3060 = {};
		const carNoYellow = {};
		const Danish = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        
		car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);
        cars.push(car);
		Danish.maerke = cars[i].make;
        Danish.farve = cars[i].color;
        Danish.fart = cars[i].speed;
		Dansker.push(Danish);
		if (cars[i].speed >= 30 & cars[i].speed  <=60 ) {
			cars3060.push(cars[i]);
		}
		if (cars[i].color != "lightyellow" ) {
			carswITHnOTlightyellow.push(cars[i].make);
		}
		
    }

    return cars;
	
	
}
var AllCars=generateCars(10);
var danish_names = AllCars.map(function (cars, index, array) {
	var dansker={};
	dansker.maerke = cars.make;
    dansker.farve = cars.color;
    dansker.fart = cars.speed;
    return dansker; 
 
});

var car3060 = AllCars.filter(function (cars) {
    return cars.speed >= 30& cars.speed <=60;
});
var carswITHnOTlightyellow = AllCars.filter(function (cars) {
    return cars.color != "lightyellow";
});
console.log(AllCars);
console.log(car3060);
console.log(carswITHnOTlightyellow);
console.log(danish_names);


for (e =0 ; e<AllCars.length;e++) {
	document.getElementById(e).innerHTML =  AllCars[e].make;
	document.getElementById(e + "" + (e)).innerHTML =  AllCars[e].color;
	document.getElementById(e + "" + (e) + "" + (e)).innerHTML =  AllCars[e].speed;

	
}
for (t =0 ; t<car3060.length;t++) {
	document.getElementById("A" + "" + t ).innerHTML =  car3060[t].make;
	document.getElementById("A" + "" + t + "" + t).innerHTML =  car3060[t].color;
	document.getElementById("A" + ""+ t + "" + t + "" + t).innerHTML =  car3060[t].speed;
	
	if(t<car3060.length) {
	document.getElementById("nodata" + "" + t).style.display='flex';
	}
		
}
for (z =0 ; z<carswITHnOTlightyellow.length;z++) {
	console.log(z);
	var arg = carswITHnOTlightyellow[z].make;
	document.getElementById("b" + "" + z ).innerHTML =  arg;
/* 	document.getElementById("b" + "" + z + "" + z).innerHTML =  carswITHnOTlightyellow[z].color;
	document.getElementById("b" + ""+ z + "" + z + "" + z).innerHTML =  carswITHnOTlightyellow[z].speed; */
	document.getElementById("nodatab" + "" + z).style.display='flex';
		
}
for (f =0 ;f<danish_names.length;f++) {
	console.log(z);
	
	document.getElementById("c" + "" + f ).innerHTML =  danish_names[f].maerke;
 	document.getElementById("c" + "" + f+ "" + f).innerHTML =  danish_names[f].farve;
	document.getElementById("c" + ""+ f + "" + f + "" + f).innerHTML =  danish_names[f].fart; 
	
		
}

/* var arg = playersarr[clicked_name-2].cards;
			document.getElementById('ply'+(clicked_name-1)).innerHTML=  JSON.stringify(arg); */