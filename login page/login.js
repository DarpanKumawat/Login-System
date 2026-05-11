function togglePassword() {
    let password = document.getElementById("password");
    let eye = document.querySelector(".eye-icon");

    if (password.type === "password") {
        password.type = "text";
        eye.textContent = "🙈";
    } else {
        password.type = "password";
        eye.textContent = "👁";
    }
}


function validateLogin() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (savedUsername === null || savedPassword === null) {
        alert("Please Sign Up First!");
        return false;
    }

    if (username !== savedUsername) {
        alert("Invalid Username!");
        return false;
    }

    if (password !== savedPassword) {
        alert("Invalid Password!");
        return false;
    }

    alert("Login Successful!");


    window.location.href = "dashboard.html";
    return false;
}