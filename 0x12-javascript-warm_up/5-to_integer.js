#!/usr/bin/node

if (process.argv.length >2){
	var userInput = parseInt(process.argv[2])
	console.log("my number:", userInput);
} else{
	console.log("Not a number");
}
