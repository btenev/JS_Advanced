function sumNum(n, m) {
    let numOne = Number(n);
    let numTwo = Number(m);

    let sum = 0;

    for (let i = numOne; i <= numTwo; i++) {
        sum += i;
    }

    console.log(sum);
}

sumNum('1', '5' );
sumNum('-8', '20');