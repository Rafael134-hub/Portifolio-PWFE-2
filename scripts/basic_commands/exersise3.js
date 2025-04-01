// Pega o botao de envio
let button_state = document.getElementById('btn');

function is_multiple() {
    const result_area = document.getElementById('result_area')
    const number_1 = document.getElementById("number_1");
    let number_1_value = parseFloat(number_1.value.replace(",", "."));

    const number_2 = document.getElementById("number_2")
    let number_2_value = parseFloat(number_2.value.replace(",", "."));

    if ((number_1_value % number_2_value == 0) || (number_2_value % number_1_value == 0)) {
        result_area.textContent = `The numbers ${number_1_value} and ${number_2_value} are multiples.`;

    } else {
        result_area.textContent = `The numbers ${number_1_value} and ${number_2_value} aren't multiples.`;
    }
}

button_state.addEventListener('click', is_multiple)