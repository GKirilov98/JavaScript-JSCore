function subtract() {
    let firstNum = +document.getElementById("firstNumber").value;
    let secondNum = +document.getElementById("secondNumber").value;
    let substract = firstNum - secondNum;
    document.getElementById("result").textContent = substract;

}
