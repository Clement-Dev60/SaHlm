import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "b");

if (infos) {
  const [axe, section, objet] = infos;
  console.log(objet.contenu.un);

  const titre = document.createElement("h1");
  titre.textContent = objet.contenu.un.titre;
  document.getElementById("hopitaux").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/carte.png";
  img.alt = "carte placeholder";
  img.id = "hopitauxPC";
  document.getElementById("hopitaux").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/carteMobile.png";
  imgPc.alt = "carte placeholder";
  imgPc.id = "hopitauxMobile";
  document.getElementById("hopitaux").appendChild(imgPc);

  const ul = document.createElement("ul");
  ul.id = "text-hopitaux";
  document.getElementById("hopitaux").appendChild(ul);

  objet.contenu.un.descriptif.split(" -").forEach((ligne) => {
    if (ligne.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = ligne.trim();
      document.getElementById("text-hopitaux").appendChild(li);
    }
  });
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
