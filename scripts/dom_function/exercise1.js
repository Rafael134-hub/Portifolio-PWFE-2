let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");
    let result = 0;

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const option = document.getElementById("options").value;

    if (option === "plus"){
        result = number1 + number2;
    } else if (option === "minus"){
        result = number1 - number2;
    } else if (option === "multiply"){
        result = number1 * number2;
    } else if (option === "divide"){
        result = number1 / number2;
    }

    if ( result === NaN || result === Infinity){
        result = 0;
    }

    result_area.textContent = result.toFixed(2);
    
});