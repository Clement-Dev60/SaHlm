import { displayInfo } from "./fonction.js";
var infos = displayInfo("Axe_II", "I", "b");

if (infos) {
  const [axe, section, objet] = infos;
  const h1 = document.createElement("div");
  h1.id = "title";

  const arrow = document.createElement("a");
  arrow.href = "../../cartographie.html";
  arrow.className = "arrow";
  const img = document.createElement("img");
  img.src = "assets/images/retour.svg";
  img.alt = "flèche retour";
  arrow.appendChild(img);

  h1.appendChild(arrow);
  const titre = document.createElement("h1");
  titre.textContent = objet.contenu.un.titre;
  h1.appendChild(titre);
  document.getElementById("hopitaux").appendChild(h1);

  const zoomLevel = 10;
  const iframeUrl = `https://www.google.com/maps/d/embed?mid=1I8qkAF6TY3VMtPslsIXCRMM1vyNTgJk&ehbc=2E312F&noprof=1&z=${zoomLevel}&iwloc=near`;

  const iframe = document.createElement("iframe");
  iframe.src = iframeUrl;
  iframe.classList.add("carte");
  document.getElementById("hopitaux").appendChild(iframe);

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
