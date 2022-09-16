//Write a function that prints a rectangle made of stars with variable size, depending on an input parameter.
// 
function printSquare(n) {
    let stars = ''; 

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n; j++) {
            stars += '* ';
        }

        stars +='\n';
    }
    console.log(stars);

}

printSquare(8);