let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const age = parseInt(document.getElementById("age").value);
    let result = "";

    if (age >= 18){
        result = "You can get your driver's license.";
    } else {
        result = "You can't get your driver's license.";
    }
    
    result_area.textContent = result;
    
});