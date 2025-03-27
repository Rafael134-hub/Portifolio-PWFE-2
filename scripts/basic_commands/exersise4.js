let button_state = document.getElementById("btn");

let celsius = document.getElementById("celsius");
let fahrenheits = document.getElementById("fahrenheits");

function converter(type){
    const celsius_value = parseFloat(celsius.value.replace(",", "."));
    const fahrenheits_value = parseFloat(fahrenheits.value.replace(",", "."));

    if (type == 'celsius'){
        fahrenheits.value = ((celsius_value * 9/5) + (32)).toFixed(2);

    } else if(type == 'fahrenheits'){
        celsius.value = ((fahrenheits_value -32) * (5/9)).toFixed(2);
    }
}

celsius.addEventListener('keyup', () => {converter('celsius')});
fahrenheits.addEventListener('keyup', () => {converter('fahrenheits')});

button_state.addEventListener("click", ()=>{
    alert("To convert any value, you'll only need to type the non converted value in the neccessary field");
});