import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "a");

if (infos) {
  const [axe, section, objet] = infos;

  const titre = document.createElement("h1");
  titre.textContent = objet.titre;
  document.getElementById("videoprotection").appendChild(titre);

  const img = document.createElement("img");
  img.src = "assets/images/cartePlaceholderPC.svg";
  img.alt = "carte placeholder";
  img.id = "videoprotectionPC";
  document.getElementById("videoprotection").appendChild(img);
  const imgPc = document.createElement("img");
  imgPc.src = "assets/images/cartePlaceholder.svg";
  imgPc.alt = "carte placeholder";
  imgPc.id = "videoprotectionMobile";
  document.getElementById("videoprotection").appendChild(imgPc);

  objet.descriptif
    .split(" -")
    .map((ligne) => ligne.trim())
    .filter((ligne) => ligne !== "")
    .forEach((ligne) => {
      const text = document.createElement("p");
      text.textContent = ligne;
      document.getElementById("videoprotection").appendChild(text);
    });
} else {
  console.log("Aucune information trouvée ou une erreur est survenue.");
}
