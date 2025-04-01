// Pega o botao de envio
let button_state = document.getElementById("btn");
const number = document.getElementById("number");

function teste() {
    const number_value = parseInt(number.value);

    const result_area = document.getElementById("result_area");

    if (number_value % 2 == 0) {
        result_area.textContent = "It's even!";
        console.log("It's even!");

    } else if (number_value % 2 == 1) {
        result_area.textContent = "It's odd!";
        console.log("It's odd!");

    } else {
        result_area.textContent = "Unvalid value.";
        console.log("Unvalid value.");
    }
};

button_state.addEventListener("click", teste)