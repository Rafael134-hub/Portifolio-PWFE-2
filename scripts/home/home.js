// Variavel que armazena o container de fundo da imagem
let fundo_da_imagem = document.querySelector(".home_main_section");

// Variaveis que armazenam area de cada card
let class_icon_1 = document.getElementById("hime_fundo");
let class_icon_2 = document.getElementById("anya_fundo");
let class_icon_3 = document.getElementById("luffy_fundo");
let class_icon_4 = document.getElementById("frieren_fundo");

// Funcoes que ao passar o mouse mouse muda a imagem de acordo com a respectiva imagem de card
class_icon_1.addEventListener("mouseover", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
});

class_icon_2.addEventListener("mouseover", () => {
    fundo_da_imagem.style.background = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/fundo_anya.png')";
});

class_icon_3.addEventListener("mouseover", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/luffy_fundo.jpg')";
});

class_icon_4.addEventListener("mouseover", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/frieren_fundo.jpg')";
});


// Funcoes que ao mouse sair do card volta a imagem de fundo para a padrao do card1
class_icon_1.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
});

class_icon_2.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
});

class_icon_3.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
});

class_icon_4.addEventListener("mouseout", () => {
    fundo_da_imagem.style.backgroundImage = "radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 0%), url('images/hime_fundo.png')";
});
