function returnSortedElements(arr) {
    arr.sort((a, b) => a - b)
    
    let result = arr.splice(arr.length / 2);
    
    return result;
}

returnSortedElements([4, 7, 2, 5]);
returnSortedElements([3, 19, 14, 7, 2, 19, 6]);