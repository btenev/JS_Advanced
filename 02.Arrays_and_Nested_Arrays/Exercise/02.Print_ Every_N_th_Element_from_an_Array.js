/*
function printNthElement(arr, num) {
    let result = [];

    for (let i = 0; i < arr.length; i += num) {
        const element = arr[i];

        result.push(element);
    }

    return result;
}
*/

//------------------------------------

function printNthElement(arr, num) {
    
    let result = arr
        .filter((element, index) => index % num == 0);
        console.log(result);

        return result;
}

printNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2);

printNthElement(['dsa',
    'asd',
    'test',
    'tset'],
    2);

printNthElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6);