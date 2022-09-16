function speedLimitCalculator(speed, area) {
    let speedLimit = 0;

    switch (area) {
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
    }

    let printMessage = '';
    let speedDifference = speed - speedLimit ;

    if (speedDifference <= 0) {
        printMessage =  `Driving ${speed} km/h in a ${speedLimit} zone`;

    } else if (speedDifference <= 20) {
        printMessage = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - speeding`;

    } else if (speedDifference <= 40) {
        printMessage = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`;

    } else if (speedDifference > 40) {
        printMessage = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`;

    }

    console.log(printMessage);
}

speedLimitCalculator(40, 'city');
speedLimitCalculator(21, 'residential');
speedLimitCalculator(120, 'interstate');
speedLimitCalculator(200, 'motorway');