function biggestCommonDivisor(numOne, numTwo) {
    let biggestDivisor = 0;

    let a = 0;
    let b = 0;

    if (numOne >= numTwo) {
      a = numOne;
      b = numTwo;

    } else {
        a = numTwo;
        b = numOne;
    }

    for (let i = 1; i <= b; i++){

        if (a % i == 0 && b % i == 0) {
           biggestDivisor = i;     
        }

    }

    console.log(biggestDivisor);
}

biggestCommonDivisor(15, 5);
biggestCommonDivisor(2154, 458);