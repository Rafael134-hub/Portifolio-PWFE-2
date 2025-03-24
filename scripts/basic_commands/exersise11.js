let button_state1 = document.getElementById('rock');
let button_state2 = document.getElementById('paper');
let button_state3 = document.getElementById('scissors');

function game(choice) {
    const result_area1 = document.getElementById('result_area1');
    const result_area2 = document.getElementById('result_area2');

    const bot_choices = ["rock", "paper", "scissors"];
    const bot_choice = bot_choices[Math.floor(Math.random() * bot_choices.length)];

    const user_choice = choice;

    result_area1.textContent = `I chose ${bot_choice} and you chose ${user_choice}.`;

    if (bot_choice == "scissors" && user_choice == "paper") {
        result_area2.textContent = "I won!";

    } else if (bot_choice == "scissors" && user_choice == "rock") {
        result_area2.textContent = "You won!";

    } else if (bot_choice == "scissors" && user_choice == "scissors") {
        result_area2.textContent = "It's a tie!";
        
    } else if (bot_choice == "paper" && user_choice == "rock") {
        result_area2.textContent = "I won!";

    } else if (bot_choice == "paper" && user_choice == "scissors") {
        result_area2.textContent = "You won!";

    } else if (bot_choice == "paper" && user_choice == "paper") {
        result_area2.textContent = "It's a tie!";

    } else if (bot_choice == "rock" && user_choice == "rock") {
        result_area2.textContent = "It's a tie!";

    } else if (bot_choice == "rock" && user_choice == "paper") {
        result_area2.textContent = "You won!";

    } else if (bot_choice == "rock" && user_choice == "scissors") {
        result_area2.textContent = "I won!";
    }

};

button_state1.addEventListener('click', () =>{
    game("rock")
});

button_state2.addEventListener('click', () =>{
    game("paper")
});

button_state3.addEventListener('click', () =>{
    game("scissors")
});