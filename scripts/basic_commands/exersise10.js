// Pega o botao de envio
let button_state = document.getElementById('btn');

function multiplication_table() {
    console.log('roi')
    const result_area = document.getElementById('result_area');

    const number = document.getElementById("number")
    const number_value = parseFloat(number.value.replace(",", "."))

    let result_text = "";

    for (let i = 1; i <= 10; i++) {
        result_text += `${number_value} x ${i} = ${number_value * i}\n`;
    }

    result_area.textContent = `${result_text}`;

};

button_state.addEventListener('click', multiplication_table)