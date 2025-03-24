let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    let value = parseFloat(document.getElementById("value").value);
    const initial_value = value;
    let minus = 0
    
    let ced200 = 0;
    let ced100 = 0;
    let ced50 = 0;
    let ced20 = 0;
    let ced10 = 0;
    let ced5 = 0;
    let ced1 = 0;

    minus = value % 200;
    ced200 = (value - minus) / 200;
    value -= 200 * ced200;

    minus = value % 100;
    ced100 = (value - minus) / 100;
    value -= 100 * ced100;

    minus = value % 50;
    ced50 = (value - minus) / 50;
    value -= 50 * ced50;

    minus = value % 20;
    ced20 = (value - minus) / 20;
    value -= 20 * ced20;

    minus = value % 10;
    ced10 = (value - minus) / 10;
    value -= 10 * ced10;

    minus = value % 5;
    ced5 = (value - minus) / 5;
    value -= 5 * ced5;

    minus = value % 1;
    ced1 = (value - minus) / 1;
    value -= 1 * ced1;

    
    if (value){
        ced1 += 1;
    }

    const result = `To have the value ${initial_value}, you'll need:
    \n200$: ${ced200}\n100$: ${ced100}\n50$: ${ced50}\n20$: ${ced20}\n10$: ${ced10}\n5$: ${ced5}\n1$: ${ced1}`;

    result_area.textContent = result;
    
});