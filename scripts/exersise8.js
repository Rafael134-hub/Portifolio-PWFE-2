let button_state = document.getElementById('btn');

function is_leap(){
    const result_area = document.getElementById('result_area');

    const ano = document.getElementById("ano");
    const ano_value = parseInt(ano.value.replace(",", "."));

    if ((ano_value % 4 == 0 && ano_value % 100 != 0) || (ano_value % 400 == 0)){
        result_area.textContent = `The year ${ano_value} is leap.`;

    } else{
        result_area.textContent = `The year ${ano_value} isn't leap.`;
    }

};

button_state.addEventListener('click', is_leap)