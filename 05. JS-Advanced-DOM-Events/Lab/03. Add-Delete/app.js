function addItem() {
    let newInput =  document.getElementById('newItemText').value;
    
     let listOfITems = document.getElementById('items');

     let newLi = document.createElement('li');

     newLi.textContent = newInput;

     let deleteButton = document.createElement('a');
     deleteButton.textContent = '[Delete]';
     deleteButton.href = "#";
     deleteButton.addEventListener('click', deleteBtn);

     newLi.appendChild(deleteButton);

     listOfITems.appendChild(newLi);

     function deleteBtn (event) {
        event.target.parentElement.remove();
     }

     document.getElementById('newItemText').value = '';
}