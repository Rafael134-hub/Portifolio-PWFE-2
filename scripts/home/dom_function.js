let exercises_button_3 = document.getElementById("exercises_button_3");

exercises_button_3.addEventListener("click", () => {
    window.location.href = "../../main/dom_function/exercise1.html";
});

let button_state = document.getElementById("ver_mais-btn");
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
