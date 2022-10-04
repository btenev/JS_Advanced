function sumTable() {
   let elements  = document.querySelectorAll('table tr');

   let sum = 0;

   for (let i = 1; i < elements.length - 1; i++) {

   
       let current = Number(elements[i].lastChild.textContent);

       sum += current;
   }

   document.getElementById('sum').innerText = sum.toFixed(2);
}