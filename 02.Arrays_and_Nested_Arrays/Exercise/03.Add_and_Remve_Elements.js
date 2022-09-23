/*
function addRemoveElement(arr) {
    let array = [];
    let number = 1;

    for (let command of arr) {
        
        if (command == 'add') {
            array.push(number);
        }

        if (command == 'remove') {
            array.pop();
        }

        number++;
    }

    let result = array.length > 0 ? array.join('\n') : 'Empty';

    console.log (result);
}
*/

function addRemoveElement(arr) {
    let array = [];
    let number = 1;

    arr.forEach(element => {
       element == 'add' ? array.push(number) : array.pop(number);
       number++ 
    });

    let result = array.length > 0 ? array.join('\n') : 'Empty';

    console.log (result);

}

addRemoveElement(['add',
    'add',
    'add',
    'add']);

addRemoveElement(['add',
    'add',
    'remove',
    'add',
    'add']);

addRemoveElement(['remove',
    'remove',
    'remove']);
