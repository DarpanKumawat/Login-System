function registerUser() {
    let username = document.getElementById("signup-username").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    // Password match check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Save data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Success message
    alert("Account created successfully!");

    // Redirect to login page
    window.location.href = "index.html";

    return false;
}