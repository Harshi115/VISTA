function generateCaptcha() {
    let captchaText = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6; 
    for (let i = 0; i < captchaLength; i++) {
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captchaText').innerText = captchaText;  
}

window.onload = function () {
    generateCaptcha();
    addRealTimeValidation();
};

function addRealTimeValidation() {
    const fields = ['firstName', 'lastName', 'email', 'userId', 'password', 'confirmPassword', 'captcha'];
    fields.forEach(field => {
        document.getElementById(field).addEventListener('input', validateField);
    });
}

function validateField() {
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let emailError = document.getElementById("emailError");
    let userIdError = document.getElementById("userIdError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let captchaError = document.getElementById("captchaError");

    firstNameError.innerHTML = '';
    lastNameError.innerHTML = '';
    userIdError.innerHTML = '';
    passwordError.innerHTML = '';
    confirmPasswordError.innerHTML = '';
    emailError.innerHTML = '';
    captchaError.innerHTML = '';

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let captcha = document.getElementById("captcha").value;
    let captchaText = document.getElementById("captchaText").innerText;

    if (!firstName) {
        firstNameError.innerHTML = "First name is required.";
    }

    if (!lastName) {
        lastNameError.innerHTML = "Last name is required.";
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !email.match(emailPattern)) {
        emailError.innerHTML = "Please enter a valid email address.";
    }

    let userIdPattern = /^[a-zA-Z0-9]+$/;  
    if (userId.length < 5) {
        userIdError.innerHTML = "User  ID must be at least 5 characters.";
    } else if (userId && !userId.match(userIdPattern)) {
        userIdError.innerHTML = "User  ID can only contain alphabets and numbers.";
    }

    let passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (password && !password.match(passwordPattern)) {
        passwordError.innerHTML = "Password must be at least 8 characters long, and contain at least one uppercase letter and one special character.";
    }

    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match.";
    }

    if (captcha && captcha !== captchaText) {
        captchaError.innerHTML = "Captcha does not match.";
    }
}

function validateForm() {
       
    let firstNameError = document.getElementById("firstNameError").innerHTML;
    let lastNameError = document.getElementById("lastNameError").innerHTML;
    let userIdError = document.getElementById("userIdError").innerHTML;
    let passwordError = document.getElementById("passwordError").innerHTML;
    let confirmPasswordError = document.getElementById("confirmPasswordError").innerHTML;
    let emailError = document.getElementById("emailError").innerHTML;
    let captchaError = document.getElementById("captchaError").innerHTML;

    if(firstNameError || lastNameError || userIdError || passwordError || confirmPasswordError || emailError || captchaError)
    {
        return false;
    }
        return true;
 

}

document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const targetInput = document.querySelector(this.getAttribute('data-toggle'));
        const isPassword = targetInput.getAttribute('type') === 'password';
        
        targetInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});
