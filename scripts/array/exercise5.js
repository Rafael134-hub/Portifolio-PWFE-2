// Nomes inicializados no codigo
const names = ["Enzo", "Márcia", "Fernanda", "Modesto", "Dorival", "Lindomar", "Israel", "Mariany", "Wilson", "Clebinho"];

// Pega o botao de envio
let display_names = "";

// Mostra na tela os nomes disponiveis
const names_area = document.getElementById("names");

for (let i = 0; i <= 9; i++) {
    if (i <= 8) {
        display_names += ` ${names[i]}, `
    } else {
        display_names += `${names[i]}`
    }
}

names_area.textContent = display_names;

let button_state = document.getElementById("btn");

// Funcao que verifica se o nome informado pelo usuario existe na ^base de dados ficticea
button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const informed_name = document.getElementById("informed_name").value;

    const name = names.find(name => informed_name.toUpperCase() === name.toUpperCase());

    let result = "";

    if (!name) {
        result = "Name not found."
    } else {
        result = `Name ${informed_name} found.`
    }

    // Muda o texto da area de resultado para mostra-lo
    result_area.textContent = result;

});