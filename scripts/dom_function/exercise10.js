// Pega o botao de envio
let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area1 = document.getElementById("result_area1");
    const result_area2 = document.getElementById("result_area2");

    const salary = parseFloat(document.getElementById("salary").value);
    let result1 = "";
    let result2 = "";

    if (salary <= 2259.20) {
        result1 = "You don't have to pay your income tax.";
        result2 = "You don't have any deduction tax";
    } else if (salary > 2259.20 && salary <= 2826.65) {
        result1 = (salary) * (7.5 / 100);
        result2 = 169.44;
    } else if (salary > 2826.65 && salary <= 3751.05) {
        result1 = (salary) * (15 / 100);
        result2 = 381.44;
    } else if (salary > 3751.05 && salary <= 4664.68) {
        result1 = (salary) * (22.5 / 100);
        result2 = 662.77;
    } else {
        result1 = (salary) * (27.5 / 100);
        result2 = 896.00;
    }

    result_area1.textContent = `Income tax value: ${result1}`;
    result_area2.textContent = `Deduction value: ${result2}`;

});