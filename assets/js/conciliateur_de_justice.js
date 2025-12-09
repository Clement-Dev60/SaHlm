import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "b");

if (infos) {
  const [axe, section, objet] = infos;
  console.log(objet.contenu.trois);

  const titre = document.createElement("h1");
  titre.textContent = objet.contenu.trois.titre;
  document.getElementById("justice").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/carte.png";
  img.alt = "carte placeholder";
  img.id = "justicePC";
  document.getElementById("justice").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/carteMobile.png";
  imgPc.alt = "carte placeholder";
  imgPc.id = "justiceMobile";
  document.getElementById("justice").appendChild(imgPc);

  const ul = document.createElement("ul");
  ul.id = "text-justice";
  document.getElementById("justice").appendChild(ul);

  objet.contenu.trois.descriptif.split(" -").forEach((ligne) => {
    if (ligne.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = ligne.trim();
      document.getElementById("text-justice").appendChild(li);
    }
  });
} else {
  console.log("Auctroise information trouvée ou troise erreur est survenue.");
}
