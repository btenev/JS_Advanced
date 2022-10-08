function solve() {
  let inputText = document.getElementById('text').value;

  let namingConvention = document.getElementById('naming-convention').value;

  let wordArray = inputText.split(' ');
  let finalResult = '';

  debugger;

  if (namingConvention == 'Camel Case' || namingConvention == 'Pascal Case') {

      transformInput();

  } else {

      finalResult += "Error!"
  }

  function transformInput() {

    for (let i = 0; i < wordArray.length; i++) {
      let element = wordArray[i];
      let transformedString = '';

      element = element.toLowerCase();

      if (i != 0 || namingConvention == 'Pascal Case') {
        transformedString = element.charAt(0).toUpperCase() + element.slice(1);
      } else {
        transformedString += element;

      }

      finalResult += transformedString;
    }
  }

  document.getElementById('result').textContent = finalResult;
}