function validateForm(){
    let isValid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const web = document.getElementById("web").value;
    const mgs = document.getElementById("mgs").value;

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const webField = document.getElementById("web");
    const mgsField = document.getElementById("mgs");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const webError = document.getElementById("webError");
    const mgsError = document.getElementById("mgsError");

    if(!name){
        nameError.style.display = 'inline';
        nameField.classList.add("input-error");
        isValid = false;
    }
    else{
        nameError.style.display = "none";
        nameField.classList.remove("input-error");
    }

    if(!email){
        emailError.style.display = 'inline';
        isValid = false;
        emailField.classList.add("input-error");
    }
    else{
        emailError.style.display = "none";
        emailField.classList.remove("input-error");
    }

    if(!web){
        webError.style.display = 'inline';
        webField.classList.add("input-error");
        isValid = false;
    }
    else{
        webError.style.display = "none";
        webField.classList.remove("input-error");
    }

    if(!mgs){
        mgsError.style.display = 'inline';
        mgsField.classList.add("input-error");
        isValid = false;
    }
    else{
        mgsError.style.display = "none";
        mgsField.classList.remove("input-error");
    }
    return isValid;
}