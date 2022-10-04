function colorize() {
    let elements = document.querySelectorAll('table tr');

    for (let i = 0; i < elements.length; i++) {
        if (i % 2 == 1) {
            elements[i].style.background = 'teal';
        }
        
    }
}