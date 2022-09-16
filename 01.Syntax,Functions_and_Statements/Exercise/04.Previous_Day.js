function printPreviousDay(year, month, day) {
    let previousDate = new Date(year, month - 1, day - 1);
    
    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth() + 1}-${previousDate.getDate()}`);
}

printPreviousDay(2016, 9, 30);
printPreviousDay(2016, 10, 1);
