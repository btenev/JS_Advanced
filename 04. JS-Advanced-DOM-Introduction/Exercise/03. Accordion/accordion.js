function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    
    let textElement =  document.getElementById('extra');
   
   
    if (buttonElement.innerText == 'MORE') {
        buttonElement.innerText = 'LESS';

        textElement.style.display = 'block';

    } else {
        buttonElement.innerText = 'MORE';

        textElement.style.display = 'none';

    }

    /* doesn't work in Judge with innerText - should be textContent and 'More' vs 'MORE'*/

}