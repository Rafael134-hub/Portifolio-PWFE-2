// Pega o botao de envio
const button_state = document.getElementById('btn');

function area() {
    const result_area = document.getElementById('result_area');
    const width = document.getElementById("width");
    const width_value = parseFloat(width.value.replace(",", "."));

    const height = document.getElementById("height");
    const height_value = parseFloat(height.value.replace(",", "."));

    if (height_value == NaN) {
        height_value = 0
    }

    if (width_value == NaN) {
        width_value = 0
    }

    area = (height_value * width_value).toFixed(2);

    result_area.textContent = `The area of ${width_value} and ${height_value} is = ${area}.`;

};

button_state.addEventListener('click', area)