function findSmallestTwoNumbers(arr) {
    arr.sort((a,b) => a - b);

    let result = arr.splice(0, 2);

    console.log(result.join(' '));
}

findSmallestTwoNumbers([30, 15, 50, 5]);
findSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);