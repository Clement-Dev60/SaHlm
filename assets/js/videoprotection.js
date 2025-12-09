import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "a");

if (infos) {
  const [axe, section, objet] = infos;

  const titre = document.createElement("h1");
  titre.textContent = objet.titre;
  document.getElementById("videoprotection").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/carte.png";
  img.alt = "carte placeholder";
  img.id = "videoprotectionPC";
  document.getElementById("videoprotection").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/carteMobile.png";
  imgPc.alt = "carte placeholder";
  imgPc.id = "videoprotectionMobile";
  document.getElementById("videoprotection").appendChild(imgPc);

  const ul = document.createElement("ul");
  ul.id = "text-videoprotection";
  document.getElementById("videoprotection").appendChild(ul);
  console.log(objet);

  objet.descriptif.split(" -").forEach((ligne) => {
    if (ligne.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = ligne.trim();
      document.getElementById("text-videoprotection").appendChild(li);
    }
  });
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
