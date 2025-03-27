let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const number3 = parseFloat(document.getElementById("number3").value);
    const number4 = parseFloat(document.getElementById("number4").value);
    const number5 = parseFloat(document.getElementById("number5").value);

    const numbers = [number1, number2, number3, number4, number5]

    const doubled_numbers = numbers.map(number => number * 2);

    result_area.textContent = `Double of the numbers: ${doubled_numbers}`;
    
});