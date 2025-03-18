let button_state = document.getElementById('btn');

function factorial(){
    const result_area = document.getElementById('result_area');
    let conta_text = "";
    let fatorial = 1;

    const number = document.getElementById("number");
    const number_value = parseInt(number.value.replace(",", "."));

    for (let i = number_value; i >= 1; i--){
        if (i == 1){
            conta_text += `${i} = `;

        } else {
            conta_text += `${i} x `;
        }
        
        fatorial *= i;
    }

    result_area.textContent = `${conta_text}${fatorial}`;
};

button_state.addEventListener('click', factorial)