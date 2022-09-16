function compareNumbers(num) {
    let number = num.toString();
    let areEqual = true;
    let totalSum = 0;

    for (let i = 1; i < number.length; i++) {
        let firstNum = Number(number[0]);
        let nextNum = Number(number[i]); 

        if (i == 1) {
            totalSum += firstNum;
        }

        totalSum += nextNum;

        if (firstNum != nextNum) {

            if (areEqual == true) {
                areEqual = false;
            }
            
        }
    }

    console.log(areEqual);
    console.log(totalSum);
}

compareNumbers(2222222);
compareNumbers(	1234);