// Pega o botao de envio
let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const financing_value = parseFloat(document.getElementById("financing").value);
    const anual_tax = parseFloat(document.getElementById("anual_tax").value);
    const months = parseFloat(document.getElementById("months").value);
    down_payment = parseFloat(document.getElementById("down_payment").value);

    let mensal_installment = 0;

    const total_financing_value = financing_value - down_payment;

    mensal_tax = (anual_tax / 100) / 12;

    mensal_installment = (total_financing_value * mensal_tax) / (1 - (1 + mensal_tax) ** -months)


    result_area.textContent = `Mensal installment: ${mensal_installment.toFixed(2)}`;

});