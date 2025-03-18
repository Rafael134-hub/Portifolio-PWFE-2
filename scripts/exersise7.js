let button_state = document.getElementById('btn');

function imc(){

    const result_area1 = document.getElementById('result_area1');
    const result_area2 = document.getElementById('result_area2');
    const result_area3 = document.getElementById('result_area3');

    const height = document.getElementById("height");
    const height_value = parseFloat(height.value.replace(",", "."));

    const weight = document.getElementById("weight");
    const weight_value = parseFloat(weight.value.replace(",", "."));

    imc = ((weight_value) / (height_value ** 2)).toFixed(2); 
    result_area1.textContent = `Your current BMI is = ${imc}`;

    const peso_ideal_inicio = ((height_value ** 2) * (18.5)).toFixed(2);
    const peso_ideal_fim = ((height_value ** 2) * (24.9)).toFixed(2);
    result_area2.textContent = `Your ideal weight is between ${peso_ideal_inicio}kg and ${peso_ideal_fim}kg.`;
    
    if(imc < 18.5){
        result_area3.textContent = "You're below your ideal weight.";

    } else if(imc <= 24.9){
        result_area3.textContent = "You're in your ideal weight.";

    } else if(imc <= 29.9){
        result_area3.textContent = "You're above your ideal weight.";

    } else if(imc <= 34.9){
        result_area3.textContent = "You have grade 1 obesity.";

    }  else if(imc <= 39.9){
        result_area3.textContent = "You have grade 2 obesity.";

    } else {
        result_area3.textContent = "You have grade 3 obesity.";
    } 

};

button_state.addEventListener('click', imc);
