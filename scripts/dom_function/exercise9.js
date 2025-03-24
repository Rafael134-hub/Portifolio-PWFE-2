let button_state = document.getElementById("btn");

let users = [];

button_state.addEventListener("click", () => {
    const username = document.getElementById("name").value.trim();
    const adress = document.getElementById("adress").value.trim();
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const telephone = document.getElementById("telephone").value.trim();
    const cellphone = document.getElementById("cellphone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!username){
        alert("The field Name is empty.");
        return;
    }

    if (!adress){
        alert("The field Adress is empty.");
        return;
    }

    const gender = genderElement.value;

    if (!gender){
        alert("The field Gender is empty.");
        return;
    }

    if (!telephone){
        alert("The field Telephone is empty.");
        return;
    }

    if (!cellphone){
        alert("The field Cellphone is empty.");
        return;
    }

    if (!email){
        alert("The field Email is empty.");
        return;
    }

    const user = [username, adress, gender, telephone, cellphone, email];
    users.push(user);
    
    alert("Data succesfully recieved.");
    
});