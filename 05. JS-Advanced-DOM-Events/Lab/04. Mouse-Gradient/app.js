function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove (event) {
        let position = event.offsetX; 
        let width = event.target.clientWidth;

        let result = position / (width - 1);
        result = Math.trunc(result * 100);

        let res = document.getElementById('result');
        res.textContent = result + '%';
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = "";
      }
    
}