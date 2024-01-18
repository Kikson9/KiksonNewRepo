
// ------------- form validation----------------  

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // get the values from the inputs
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // const allValid = true;

    if (firstnameValue === "") { 
        // show error 
        setErrorfor(firstname, "First name cannot be empty");
        // allValid = false;
    } else {
        setSuccessfor(firstname);
    }

    if (lastnameValue === "") {
        setErrorfor(lastname, "Last name cannot be empty");
        // allValid = false;
    } else {
        setSuccessfor(lastname)
    }

    if (emailValue === "") {
        setErrorfor(email, "Email cannot be empty");
        // allValid = false;
    }
    else if (!isEmail(emailValue)) {
        setErrorfor(email, "Looks like this is not an email");  
        // allValid = false;
    } else {
        setSuccessfor(email);
    }

    if (passwordValue === "") {
        setErrorfor(password, "Password cannot be empty");
        // allValid = false;
    } else {
        // add success class
        setSuccessfor(password);
    }

    // if (allValid) {
    //     setTimeout(function () {
    //       const form = document.getElementById("form");
    //       form.reset();
    
    //       const inputs = form.querySelectorAll("input");
    //       inputs.forEach(function(input) {
    //         input.classList.remove("success");
    //       });
    //     }, 2000);
    
    //     console.log("Form submitted successfully!");
    //   } else {
    //     setErrorfor(firstname);
    //     setErrorfor(lastname);
    //     setErrorfor(email);
    //     setErrorfor(password);
    //   }
}



function setErrorfor(input, message) {
    const formControl = input.parentElement; // .form control
    const small = formControl.querySelector("small");

    // Because we want to add the error message inside the small tag
    small.innerHTML = message;

    // add error class
    formControl.className = "form-control error"
}

function setSuccessfor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";


}

function isEmail(email) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
}
