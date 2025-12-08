import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "b");

if (infos) {
  const [axe, section, objet] = infos;
  console.log(objet.contenu.un);

  const titre = document.createElement("h1");
  titre.textContent = objet.contenu.un.titre;
  document.getElementById("hopitaux").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/cartePlaceholderPC.svg";
  img.alt = "carte placeholder";
  img.id = "hopitauxPC";
  document.getElementById("hopitaux").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/cartePlaceholder.svg";
  imgPc.alt = "carte placeholder";
  imgPc.id = "hopitauxMobile";
  document.getElementById("hopitaux").appendChild(imgPc);

  objet.contenu.un.descriptif.split(" -").forEach((ligne) => {
    if (ligne.trim() !== "") {
      const p = document.createElement("p");
      p.textContent = ligne.trim();
      document.getElementById("hopitaux").appendChild(p);
    }
  });
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
