// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
// 	inputString += inputStdin;
// });

// process.stdin.on('end', function() {
// 	inputString = inputString.split('\n');

// 	main();
// });

// function readLine() {
// 	return inputString[currentLine++];
// }

/*
 * Complete the 'minimalHeaviestSetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function minimalHeaviestSetA(arr) {
// 	// Write your code here
// 	let n = arr.length;
// 	let a = [];
// 	arr.sort();
// 	// let middle = arr.reduce((a,b) => a+b, 0)/2
// 	let newArr = arr.slice(0).reduce((acc, curr, i, arr) => {
// 		if (i === 2) {
// 			arr.splice(1);
// 		}
// 		return (acc += curr);
// 	}, 0);
// 	return newArr;
// }

// THIS returns the last few integers
// function minimalHeaviestSetA(arr) {
// 	// Write your code here
// 	let n = arr.length;
// 	let a = [];
// 	arr.sort();
// 	let subA = arr.slice(Math.ceil(n / 2));
// 	let subB = arr.splice(0, Math.ceil(n / 2));
// 	return subA;
// }

// Final Answer
function minimalHeaviestSetA(arr) {
	let numBoxes = 2;
	if (arr.length <= numBoxes) return arr;
	arr.sort(function(a, b) {
		return a - b;
	});
	console.log('sorted arr: ', arr);
	let subA = arr.slice(arr.length - numBoxes);
	let subB = arr.splice(0, numBoxes);
	console.log(subA);
	function movinThruAnArray() {
		if (subB.reduce((a, b) => a + b, 0) >= subA.reduce((a, b) => a + b, 0)) {
			subA.push(subB.pop());
			console.log(subA);
			movinThruAnArray();
		}
		return subA;
	}
	movinThruAnArray();
	return subA;
}
