let username = localStorage.getItem("username");

if (username) {
  document.getElementById("displayUsername").textContent = username;
}

function logout() {
  window.location.href = "index.html";
}