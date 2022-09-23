function rotateArray(arr, num) {
    
    while (num > 0) {
        for (let i = 0; i < arr.length; i++) {

            let lastElement = arr.pop();
            arr.unshift(lastElement);

            num--;

            if (num == 0) {
                break;
            }
        }
    }

    console.log(arr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2);

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);
