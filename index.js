
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
    let firstnameValue = firstname.value.trim();
    let lastnameValue = lastname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

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

    if (firstnameValue && lastnameValue && passwordValue && isEmail(emailValue)) {
        setTimeout(function () {
          const form = document.getElementById("form");
          form.reset();
          firstnameValue = "";
          lastnameValue = "";
          passwordValue = "";
          emailValue = "";
    
          const inputs = form.querySelectorAll("input");
          console.log([...inputs][0].classList);
          [...inputs].forEach(function(input) {
            input.parentElement.classList.remove("success");
          })
        }, 2000);
    
        console.log("Form submitted successfully!");
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
