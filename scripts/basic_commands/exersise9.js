// Pega o botao de envio
let button_state = document.getElementById('btn')
function convert() {
    const result_area = document.getElementById('result_area');

    const cambio = document.getElementById("cambio");
    const cambio_value = parseFloat(cambio.value.replace(",", "."));

    const valor_desejado = document.getElementById("valor_desejado");
    const valor_desejado_value = parseFloat(valor_desejado.value.replace(",", "."));

    const valor_convertido = cambio_value * valor_desejado_value;

    result_area.textContent = `The converted value is = ${valor_convertido}.`;

};

button_state.addEventListener('click', convert)