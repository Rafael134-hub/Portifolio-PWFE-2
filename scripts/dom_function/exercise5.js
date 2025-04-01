// Pega o botao de envio
let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const number3 = parseFloat(document.getElementById("number3").value);

    let bigger = 0;
    let second_bigger = 0;
    let minor = 0;

    if (number1 > number2 && number1 > number3) {
        bigger = number1;
    } else if (number1 > number2 || number1 > number3) {
        second_bigger = number1;
    } else {
        minor = number1;
    }

    if (number2 > number1 && number2 > number3) {
        bigger = number2;
    } else if (number2 > number1 || number2 > number3) {
        second_bigger = number2;
    } else {
        minor = number2;
    }

    if (number3 > number1 && number3 > number2) {
        bigger = number3;
    } else if (number3 > number1 || number3 > number2) {
        second_bigger = number3;
    } else {
        minor = number3;
    }

    const result = `${minor}, ${second_bigger}, ${bigger}`;

    result_area.textContent = result;

});