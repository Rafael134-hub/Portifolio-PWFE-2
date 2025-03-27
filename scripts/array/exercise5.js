const names = ["Enzo", "Márcia", "Fernanda", "Modesto", "Dorival", "Lindomar", "Israel", "Mariany", "Wilson", "Clebinho"];
let display_names = "";

const names_area = document.getElementById("names");

for (let i = 0; i <= 9; i++){
    if (i <= 8){
        display_names += ` ${names[i]}, `
    } else {
        display_names += `${names[i]}`
    }
}

names_area.textContent = display_names;

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