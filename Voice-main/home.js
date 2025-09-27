document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const isPasswordHidden = passwordField.type === "password";
  
    passwordField.type = isPasswordHidden ? "text" : "password";
  
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
  