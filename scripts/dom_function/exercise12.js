let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const value = parseFloat(document.getElementById("value").value);
    const tax = parseFloat(document.getElementById("tax").value);
    const months = parseFloat(document.getElementById("months").value);
    let result = value;

    for (let i = 0; i < months; i++){
        result += (result) * (tax/100);
    }
    
    result_area.textContent = result.toFixed(2);
    
});