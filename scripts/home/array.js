// Pega o botao de ir pra exercicio 1
let exercises_button_2 = document.getElementById("exercises_button_2");

// Vai ao exercicio 1 ao apertar o botao
exercises_button_2.addEventListener("click", () => {
    window.location.href = "../../main/array/exercise1.html";
});

// Pega o botao de expandir ou diminuir area de texto
let button_state = document.getElementById("ver_mais-btn");
let state = 0;

//Funcao que aumenta ou diminui a area de explicacao da aula de acordo com o status do botao
button_state.addEventListener("click", () => {
    let text_area = document.querySelector(".content_container");
    if (state === 0) {
        text_area.style.maxHeight = "100%";
        state = 1;
        button_state.textContent = "Less details";
    } else {
        text_area.style.maxHeight = "200px";
        state = 0;
        button_state.textContent = "More details";
    }
});
