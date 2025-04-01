// Pega o botao de envio
let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const hours = parseFloat(document.getElementById("hours").value);

    const minutes = hours * 60

    const result = `${hours} hours are ${minutes} minutes.`;

    result_area.textContent = result;

});