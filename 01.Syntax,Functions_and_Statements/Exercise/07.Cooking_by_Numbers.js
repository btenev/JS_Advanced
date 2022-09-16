function cookingNumbers(num, ...operations) {
    let number = Number(num);
    let operationArr = operations;

    for (let i = 0; i < operationArr.length; i++) {
        const operation = operationArr[i];

        switch (operation) {
            case 'chop':
                number /= 2;

                break;
            case 'dice':
                number = Math.sqrt(number);

                break;
            case 'spice':
                number += 1;

                break;
            case 'bake':
                number *= 3;

                break;
            case 'fillet':
                number -= number * 0.20;
                break;
        }

        console.log(number);
        console.log();
    }
}

// cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');