document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitbtn = document.getElementById("submitbtn");
    const loginForm = document.querySelector('.form[data-target="loginForm"]');

    function toggleSubmitButton() {
        if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            submitbtn.disabled = false;
        } else {
            submitbtn.disabled = true;
        }
    }
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        window.location.href="home.html"; 
    });

    usernameInput.addEventListener("input", toggleSubmitButton);
    passwordInput.addEventListener("input", toggleSubmitButton);
});
