function findBiggestElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;

    matrix.forEach(row => {
        
        row.forEach(col => max = Math.max(max, col))

        return max;
    });

    return max;
}

let biggest = findBiggestElement([[20, 50, 10], [8, 33, 145]]);

console.log(biggest);