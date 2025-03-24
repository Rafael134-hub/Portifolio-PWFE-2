let button_state = document.getElementById("btn");

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
    const number9 = parseFloat(document.getElementById("number9").value);
    const number10 = parseFloat(document.getElementById("number10").value);
    const number11 = parseFloat(document.getElementById("number11").value);
    const number12 = parseFloat(document.getElementById("number12").value);
    const number13 = parseFloat(document.getElementById("number13").value);
    const number14 = parseFloat(document.getElementById("number14").value);
    const number15 = parseFloat(document.getElementById("number15").value);
    const number16 = parseFloat(document.getElementById("number16").value);
    const number17 = parseFloat(document.getElementById("number17").value);
    const number18 = parseFloat(document.getElementById("number18").value);
    const number19 = parseFloat(document.getElementById("number19").value);
    const number20 = parseFloat(document.getElementById("number20").value);

    const numbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10,
        number11, number12, number13, number14, number15, number16, number17, number18, number19, number20
    ];

    let soma = 0;

    for(let i = 0; i <=19; i++){
        soma += numbers[i];
    }

    average = soma / 20;

    above_average = numbers.filter(number => number > average);

    result_area.textContent = above_average;
    
});