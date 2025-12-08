import { text } from "./text.js";

/**
 * @param {string} Axe - Axe_I ou Axe_II
 * @param {string} section - _1, _2, _3, etc.
 * @param {string} objet - a, b, c, etc.
 */
let displayInfo = (Axe, section, objet) => {
  // Récupérer l'axe
  const axeData = text.texte[Axe];

  if (!axeData) {
    console.log(`Erreur: Axe "${Axe}" non trouvé`);
    return;
  }

  console.log("=== TITRE DE L'AXE ===");
  console.log(axeData.titre);

  // Si la section existe dans cet axe
  if (axeData.sections && axeData.sections[section]) {
    const sectionData = axeData.sections[section];

    console.log("\n=== TITRE DE LA SECTION ===");
    console.log(sectionData.titre);

    // Si l'objet existe dans cette section
    if (sectionData.contenu && sectionData.contenu[objet]) {
      const objetData = sectionData.contenu[objet];

      console.log("\n=== CONTENU DE L'OBJET ===");
      console.log("Titre:", objetData.titre);
      console.log("Descriptif:", objetData.descriptif);
      console.log("Descriptif:", objetData.qualification);
      console.log("Descriptif:", objetData.procedure);
    } else {
      console.log(`Erreur: Objet "${objet}" non trouvé dans la section`);
    }
  } else {
    console.log(`Erreur: Section "${section}" non trouvée`);
  }
};

// Appel de la fonction
displayInfo("Axe_I", "_2", "a");
