let button_state = document.getElementById('btn');

function media(){
    const result_area1 = document.getElementById('result_area1');
    const result_area2 = document.getElementById('result_area2');
    const result_area3 = document.getElementById('result_area3');

    const nota_1 = document.getElementById("nota_1");
    const nota_1_value = parseFloat(nota_1.value.replace(",", "."));

    const nota_2 = document.getElementById("nota_2");
    const nota_2_value = parseFloat(nota_2.value.replace(",", "."));
    
    const media = ((nota_1_value + nota_2_value) / (2)).toFixed(2);

    if (media >= 6){
        console.log("Aluna(o) aprovada(o).");
        result_area1.textContent = `With the grades ${nota_1_value} and ${nota_2_value}, your average is = ${media} and you're: APPROVED!`;

    } else{
        console.log("Aluna(o) não aprovada(o).");
        result_area1.textContent = `With the grades ${nota_1_value} and ${nota_2_value}, your average is = ${media} and you're: NOT APPROVED!`;
    }

    if((nota_1_value % 2 == 0) || (nota_1_value == 0)){
        result_area2.textContent = `The first informed grade: ${nota_1_value} is even.`;

    } else if (nota_1_value % 2 == 1){
        result_area2.textContent = `The first informed grade: ${nota_1_value} is odd.`;

    } else{
        console.log("A primeira nota não é par e nem ímpar.");
        result_area2.textContent = `The first informed grade: ${nota_1_value} isn't odd or even.`;
    }


    if((nota_2_value % 2 == 0) || (nota_2_value == 0)){
        result_area3.textContent = `The second informed: ${nota_2_value} is even.`;

    } else if (nota_2_value % 2 == 1){
        result_area3.textContent = `The second informed: ${nota_2_value} is odd.`;

    } else{
        result_area3.textContent = `The second informed: ${nota_2_value} isn't odd or even.`;
    }
}

button_state.addEventListener('click', media)