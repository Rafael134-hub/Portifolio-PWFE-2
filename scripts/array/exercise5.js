const names = ["Enzo", "Márcia", "Fernanda", "Modesto", "Dorival", "Lindomar", "Israel", "Mariany", "Wilson", "Clebinho"];

const names_area = document.getElementById("names");
names_area.textContent = names;

let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const informed_name = document.getElementById("informed_name").value;

    const name = names.find(name => informed_name === name);

    let result = "";

    if (!name){
        result = "Name not found."
    } else {
        result = `Name ${informed_name} found.`
    }

    result_area.textContent = result;
    
});