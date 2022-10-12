function deleteByEmail() {
    let inputElement = document.getElementsByName('email')[0].value;

    let result = document.getElementById('result');

    /*
    let tableCells = document
        .getElementById('customers')
        .getElementsByTagName('td');
    */

    let tableCells = document.querySelectorAll('#customers td:nth-child(2)');

    for(let tableCell of tableCells) {
        
        if (tableCell.textContent == inputElement) {
            tableCell.parentElement.remove();

            result.textContent = 'Deleted';

        } else {
            result.textContent = 'Not found.'
        }
    }
}