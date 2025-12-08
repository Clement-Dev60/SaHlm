import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "b");

if (infos) {
  const [axe, section, objet] = infos;
  console.log(objet.contenu.quatre);

  const titre = document.createElement("h1");
  titre.textContent = objet.contenu.quatre.titre;
  document.getElementById("spa").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/cartePlaceholderPC.svg";
  img.alt = "carte placeholder";
  img.id = "spaPC";
  document.getElementById("spa").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/cartePlaceholder.svg";
  imgPc.alt = "carte placeholder";
  imgPc.id = "spaMobile";
  document.getElementById("spa").appendChild(imgPc);

  objet.contenu.quatre.descriptif.split(" -").forEach((ligne) => {
    if (ligne.trim() !== "") {
      const p = document.createElement("p");
      p.textContent = ligne.trim();
      document.getElementById("spa").appendChild(p);
    }
  });
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
