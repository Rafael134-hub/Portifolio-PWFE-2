let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const salary = parseFloat(document.getElementById("salary").value);
    let result = "";

    if (salary <= 1518){
        result = (salary) * (7.5/100);
    } else if (salary > 1518 && salary <= 2793.88){
        result = (salary) * (9/100);
    } else if (salary > 2793.88 && salary <= 4190.83){
        result = (salary) * (12/100);
    } else if (salary > 4190.83 && salary <= 8157.41){
        result = (salary) * (14/100);
    } else {
        result = 908.85;
    }
    
    result_area.textContent = result;
    
});