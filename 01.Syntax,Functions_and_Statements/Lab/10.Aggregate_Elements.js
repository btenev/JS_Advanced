
function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0,( a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, init, func) {
        let result = init; 

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            
            result = func(result, element);
        }
        console.log(result);
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);