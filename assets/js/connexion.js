const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "123456";

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});

function login() {
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pwd").value;
    const msg = document.getElementById("msg");
    const msg2 = document.getElementById("msg2");
    const msgSuccess = document.getElementById("success")

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        msgSuccess.style.color = "green";
        msgSuccess.textContent = "Connexion réussie ! 🎉";
        window.location.href = "index.html"
    } else {
        msg.style.color = "red";
        msg2.style.color = "red"

        if (email !== VALID_EMAIL && password !== VALID_PASSWORD) {
            msg.textContent = "Identifiant incorrect.";
            msg2.textContent = "Mot de passe incorrect.";
        } else if (email !== VALID_EMAIL) {
            msg.textContent = "Identifiant incorrect.";
        } else {
            msg.textContent = "Mot de passe incorrect.";
        }
    }
}
