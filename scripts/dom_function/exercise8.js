let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const number = parseFloat(document.getElementById("number").value);
    let result = "";

    const squareroot = Math.sqrt(number).toFixed(2);
    result = `The square root of ${number} is: ${squareroot}.`
    
    result_area.textContent = result;
    
});