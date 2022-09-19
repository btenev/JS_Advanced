/*
You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, 
doubled and in reverse order.
The input comes as an array of number elements.
*/

function manipulateNumbers(arr) {

    return arr
        .filter((num, index) => index % 2 != 0)
        .map(n => n * 2)
        .reverse()
        .join(' ');
}

let result = manipulateNumbers([10, 15, 20, 25]);
let resultTwo = manipulateNumbers([3, 0, 10, 4, 7, 3]);

console.log(result);
console.log(resultTwo);