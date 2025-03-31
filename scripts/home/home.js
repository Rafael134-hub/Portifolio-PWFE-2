let fundo_da_imagem = document.querySelector(".home_main_section");
let container_fundo = document.querySelector(".main_home_container");

let class_icon_1 = document.getElementById("hime_fundo");
let class_icon_2 = document.getElementById("anya_fundo");
let class_icon_3 = document.getElementById("luffy_fundo");
let class_icon_4 = document.getElementById("frieren_fundo");

class_icon_1.addEventListener("mouseover", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
    container_fundo.style.transition = "all 1s ease-in-out";
});

class_icon_2.addEventListener("mouseover", () => {
    fundo_da_imagem.style.background = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/fundo_anya.png')";
    container_fundo.style.transition = "all 1s ease-in-out";
});

class_icon_3.addEventListener("mouseover", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/luffy_fundo.jpg')";
    container_fundo.transition = "all 1s ease-in-out";
});

class_icon_4.addEventListener("mouseover", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/frieren_fundo.jpg')";
    container_fundo.style.transition = "all 1s ease-in-out";
});


class_icon_1.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
    container_fundo.style.transition = "all 1s ease-in-out";
});

class_icon_2.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
    container_fundo.style.transition = "all 1s ease-in-out";
});

class_icon_3.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
    container_fundo.style.transition = "all 1s ease-in-out";
});

class_icon_4.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
    container_fundo.style.transition = "all 1s ease-in-out";
});
