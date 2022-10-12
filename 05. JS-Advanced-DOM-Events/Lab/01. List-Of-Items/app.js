function addItem() {

    /* We get the element items - ul*/
    let listOfItems = document.getElementById('items');

    /* We get the input text entered by the user*/
    let inputText = document.getElementById('newItemText').value;

    /* We create a new li element */
    let newLi = document.createElement('li');

    /* we assign the text value entered by the user to the newLi element*/
    newLi.textContent = inputText;

    /* we add the new li element to the ul element*/
    listOfItems.appendChild(newLi);

    /* we clear the user input after it has been added to the list*/
    document.getElementById('newItemText').value = '';
}