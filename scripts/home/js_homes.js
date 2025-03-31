let exercises_button = document.getElementById("exercises_button");

exercises_button.addEventListener("click", () => {
    window.location.href = "../../main/basic_commands/exercise1.html";
});

let button_state = document.querySelector("#ver_mais-btn");
let state = 0;

button_state.addEventListener("click", () => {
    let text_area = document.querySelector(".content_container"); 
    if (state === 0) {
        text_area.style.maxHeight = "100%";
        state = 1; 
        button_state.textContent = "Less details";
    } else {
        text_area.style.maxHeight = "100px";
        state = 0; 
        button_state.textContent = "More details";
    }
});
