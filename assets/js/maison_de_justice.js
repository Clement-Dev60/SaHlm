import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "b");

if (infos) {
  const [axe, section, objet] = infos;
  console.log(objet.contenu.deux);

  const titre = document.createElement("h1");
  titre.textContent = objet.contenu.deux.titre;
  document.getElementById("justice").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/cartePlaceholderPC.svg";
  img.alt = "carte placeholder";
  img.id = "justicePC";
  document.getElementById("justice").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/cartePlaceholder.svg";
  imgPc.alt = "carte placeholder";
  imgPc.id = "justiceMobile";
  document.getElementById("justice").appendChild(imgPc);

  objet.contenu.deux.descriptif.split(" -").forEach((ligne) => {
    if (ligne.trim() !== "") {
      const p = document.createElement("p");
      p.textContent = ligne.trim();
      document.getElementById("justice").appendChild(p);
    }
  });
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
