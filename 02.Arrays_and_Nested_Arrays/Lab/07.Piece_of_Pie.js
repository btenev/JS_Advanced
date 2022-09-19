function solve (arr, flavourOne, flavourTwo) {
    let startIndex = arr.indexOf(flavourOne);
    let endIndex = arr.indexOf(flavourTwo);

    let result = arr.slice(startIndex, endIndex + 1);

    return result;
}   

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);


