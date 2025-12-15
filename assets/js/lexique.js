import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "e");
const div = document.getElementById("h1");
const context = document.getElementById("lexique")
if (infos) {
  const [axe, section, objet] = infos;

  const titre = document.createElement("h1");
  titre.textContent = objet.lexique.titre;

  div.appendChild(titre);

  const lexique = objet.lexique.descriptif;
  console.log(lexique);

  const resultat = lexique.split(" -").map((part) => part.trim());
  console.log(resultat);

  for (let i = 1; i < resultat.length; i++) {
    const word = document.createElement("div");
    word.classList.add("lexique");

    const lex = document.createElement("p");
    lex.textContent = resultat[i];
    word.appendChild(lex);
    context.appendChild(word);
  }
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
