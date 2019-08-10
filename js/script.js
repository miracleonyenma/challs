// Name: Miracle Onyenma
// Code challenge
//Declare and get DOM Elements
var oCont = document.querySelector(".output"),
	runbtn = document.querySelector("#cont button"),
	showbtn = document.querySelector("#show")
	out = document.querySelectorAll(".out");

//Declare the function
function sumChar(){
	text = document.querySelector("#input").value.toLowerCase(); 
//	text2 = text.split("");
// Declare varaiables
	var i, x, newSum = 0, sum = 0, string = "";
//	create objject properties and their corresponding values 
	arr = {
	"a": 1,
	"b": 2,
	"c": 3,
	"d": 4,
	"e": 5,
	"f": 6,
	"g": 7,
	"h": 8,
	"i": 9,
	"j": 10,
	"k": 11,
	"l": 12,
	"m": 13,
	"n": 14,
	"o": 15,
	"p": 16,
	"q": 17,
	"r": 18,
	"s": 19,
	"t": 20,
	"u": 21,
	"v": 22,
	"w": 23,
	"x": 24,
	"y": 25,
	"z": 26,
	"": 0,
	" ": 0
	};

// to create non string properties to add to arr object
	for(i= 0; i < 10; i++){
		arr[i] = i;
	}

// loop through the text string
	for(i = 0; i < text.length; i++){
	console.log(text[i]);
// assign each string to x
	x = text[i];
	// 	console.log(arr[x]);
//	sum the values of the properties the arr object using their keys derived from text
	newSum += arr[x];
	//	console.log(newSum);
	//	for(x in arr){
	//	sum += parseInt(arr[x]);
	//	}

//	displays the chractars and it's corresponding value 
	string += ` (${text[i]} : ${arr[x]}) `;

	}
	
	//	console.log(sum);
	//	console.log(text2);
	out[0].innerText = `Sum = ${newSum}`;
	out[1].children[0].children[0].innerText = `Letters =${string}`;

}

function show(){
	oCont.classList.toggle("show");
	showbtn.classList.toggle("open");
}
showbtn.addEventListener("click", sumChar);
showbtn.addEventListener("click", show);