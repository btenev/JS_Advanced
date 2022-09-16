function calculateDaysInMonth(month, year){
    console.log(new Date(year, month, 0).getDate());
}

calculateDaysInMonth(1, 2012);
calculateDaysInMonth(2, 2021);