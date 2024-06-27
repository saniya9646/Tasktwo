function multiply(){
    var numOne = document.getElementById('num1').value;
    var numTwo = document.getElementById('num2').value;
    var theProduct = parseInt(numOne)*parseInt(numTwo);
    var p = document.getElementById('theResult');
    p.innerHTML += theProduct;    
}
function divide(){
    var numOne = document.getElementById('num1').value;
    var numTwo = document.getElementById('num2').value;
    var theResult = parseInt(numOne)/parseInt(numTwo);
    var d = document.getElementById('theResult');
    d.innerHTML += theResult;  
}
