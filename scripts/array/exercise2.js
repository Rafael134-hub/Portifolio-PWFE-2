// Pega o botao de envio
let button_state = document.getElementById("btn");

// Funcao que pega a media dos valores informados
button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const number3 = parseFloat(document.getElementById("number3").value);
    const number4 = parseFloat(document.getElementById("number4").value);
    const number5 = parseFloat(document.getElementById("number5").value);
    const number6 = parseFloat(document.getElementById("number6").value);
    const number7 = parseFloat(document.getElementById("number7").value);
    const number8 = parseFloat(document.getElementById("number8").value);

    const numbers = [number1, number2, number3, number4, number5, number6, number7, number8];
    let soma = 0;

    for (let i = 0; i <= 7; i++) {
        soma += numbers[i];
    }

    average = soma / 8;

    // Muda o texto da area de resultado para mostra-lo
    result_area.textContent = average.toFixed(2);

});