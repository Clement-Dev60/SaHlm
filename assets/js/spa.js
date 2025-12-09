import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "b");

if (infos) {
  const [axe, section, objet] = infos;
  console.log(objet.contenu.quatre);

  const titre = document.createElement("h1");
  titre.textContent = objet.contenu.quatre.titre;
  document.getElementById("spa").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/carte.png";
  img.alt = "carte placeholder";
  img.id = "spaPC";
  document.getElementById("spa").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/carteMobile.png";
  imgPc.alt = "carte placeholder";
  imgPc.id = "spaMobile";
  document.getElementById("spa").appendChild(imgPc);
  const ul = document.createElement("ul");
  ul.id = "text-spa";
  document.getElementById("spa").appendChild(ul);

  objet.contenu.quatre.descriptif.split(" -").forEach((ligne) => {
    if (ligne.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = ligne.trim();
      document.getElementById("text-spa").appendChild(li);
    }
  });
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
