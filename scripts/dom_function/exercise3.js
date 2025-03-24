let button_state = document.getElementById("btn");

button_state.addEventListener("click", () => {
    const result_area = document.getElementById("result_area");

    const word = document.getElementById("word").value;
    let final_message = "";
    word_lenght = word.length

    for (let i = 0; i < word_lenght; i++){
        final_message += `${word[i]}\n`
    }

    result_area.textContent = final_message;
    
});