function extractText() {
    let elements = document.getElementsByTagName('li');
    
    
    let textArea = document.getElementById('result');
    
    for (const element of elements) {
        textArea.value += element.textContent + '\n';
    }

}