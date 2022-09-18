function digitShuffler(arr) {
    let result = [];

    for (const digit of arr) {

       if (digit < 0) {
        result.unshift(digit);
       } else {
        result.push(digit);
       }
    }

    console.log(result.join('\n'));
}


digitShuffler([7, -2, 8, 9]);
digitShuffler([3, -2, 0, -1]);