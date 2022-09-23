/*
function solve (arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if (biggestNum <= element) {
            biggestNum = element;
            array.push(biggestNum)
        } 
    }

    return array;
}
*/

function solve(arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    return arr.reduce((acc, current) => {
        if (biggestNum <= current) {
            biggestNum = current;
            acc.push(current);
        }
        return acc;

    }, []);
    
}


solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);

solve([1,
    2,
    3,
    4]);

solve([20,
    3,
    2,
    15,
    6,
    1]);    