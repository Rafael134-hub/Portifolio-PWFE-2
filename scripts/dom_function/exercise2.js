// Pega o botao de envio
let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const word = document.getElementById("word").value;
    let reversed_word = "";
    word_lenght = word.length

    for (let i = word_lenght - 1; i >= 0; i--) {
        reversed_word += word[i];
        console.log(reversed_word)
    }

    result_area.textContent = reversed_word;

});