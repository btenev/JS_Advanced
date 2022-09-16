function numCals(numOne, numTwo, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = numOne + numTwo;

            break;
        case '-':
            result = numOne - numTwo;

            break;
        case '*':
            result = numOne * numTwo;

            break;
        case '/':
            result = numOne / numTwo;

            break;
        case '%':
            result = numOne % numTwo;

            break;
        case '**':
            result =  numOne ** numTwo;

            break;
    }

    console.log(result);
}

numCals(5, 6, '+');
numCals(3, 5.5, '*');
