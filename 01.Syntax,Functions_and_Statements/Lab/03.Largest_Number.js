function largestNumCalc (argOne, argTwo, argThree) {
   let largestNum = 0;

    if (argOne > argTwo && argOne > argThree) {
        largestNum = argOne;

    } else if (argTwo > argOne && argTwo > argThree) {
        largestNum = argTwo;

    } else if (argThree > argTwo && argThree > argOne) {
        largestNum = argThree;

    }

    console.log(`The largest number is ${largestNum}.`);
}

// function largestNumCalc (argOne, argTwo, argThree) {
//     console.log(Math.max(argOne, argTwo, argThree))
// }


largestNumCalc(5, -3, 16);
largestNumCalc(-3, -5, -22.5);
