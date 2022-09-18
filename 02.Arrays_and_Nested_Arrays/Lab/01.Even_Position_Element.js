// function printElementAtEvenPosition(arr) {
//     let print = '';


//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
        
//         if (i % 2 == 0) {
//             print += element + ' ';
//         }
//     }

//     console.log(print)
// }


function printElementAtEvenPosition(arr) {
    let print = [];


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if (i % 2 == 0) {
            print.push(element);
        }
    }

    console.log(print.join(' '));
}
printElementAtEvenPosition(['20', '30', '40', '50', '60']);
printElementAtEvenPosition(['5', '10']);