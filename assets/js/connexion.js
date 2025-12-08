const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "123456";

function login() {
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pwd").value;
    const msg = document.getElementById("msg");

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        msg.style.color = "green";
        msg.textContent = "Connexion réussie !";
    } else {
        if (email != VALID_EMAIL) {
            msg.style.color = "red";
            msg.textContent = "Identifiant incorrect.";
        }
        if (password != VALID_PASSWORD) {
            msg.style.color = "red";
            msg.textContent = "Mot de passe incorrect.";
        }

    }
}