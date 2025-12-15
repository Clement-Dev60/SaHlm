const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const iconRight = q.querySelector(".icon-right");

    if (answer.style.maxHeight) {
      // Fermer
      answer.style.maxHeight = null;
      answer.classList.remove("open");
      q.classList.remove("open-btn");

      // remettre l’icône fermée
      iconRight.src = "assets/img/derouler_white.svg";

    } else {
      // Ouvrir
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.classList.add("open");
      q.classList.add("open-btn");

      // changer vers l'icône ouverte
      iconRight.src = "assets/img/referme_white.svg";
    }
  });
});