function stingLength(argOne, argTwo, argThree) {
    let sumOfLength = argOne.length + argTwo.length + argThree.length;
    
    let averageStringLength = Math.floor(sumOfLength / 3) 

    console.log(sumOfLength);
    console.log(averageStringLength);
}

stingLength('chocolate', 'ice cream', 'cake');
stingLength('pasta', '5', '22.3');
