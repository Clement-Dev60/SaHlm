// =======================
// IMPORT DES DONNÉES
// =======================
import { text } from "./text.js";

const accordionContainer = document.getElementById("accordion");

// =======================
// UTILITAIRE : FERMER TOUS LES ENFANTS D’UN PARENT
// =======================
function closeAllChildren(parentContent) {
	parentContent.querySelectorAll(".accordion-header.child").forEach(header => {
		header.classList.remove("active");

		const toggleIcon = header.querySelector(".toggle-icon");
		if (toggleIcon) toggleIcon.src = "assets/images/plus.svg";

		const content = header.nextElementSibling;
		content.classList.remove("open");
		content.style.maxHeight = null;
	});
}

// =======================
// CONSTRUCTION DES SECTIONS PARENTES
// =======================
Object.values(text.texte.Axe_I.sections).forEach(sectionData => {

	// ===== HEADER PARENT =====
	const parentHeader = document.createElement("div");
	parentHeader.classList.add("accordion-header", "parent");

	const parentLeft = document.createElement("div");
	parentLeft.classList.add("left");

	const parentIconImg = document.createElement("img");
	parentIconImg.src = "assets/images/icon-parent.svg"; // ← icône parent
	parentIconImg.classList.add("icon");

	const parentTitle = document.createElement("span");
	parentTitle.textContent = sectionData.titre;

	parentLeft.appendChild(parentIconImg);
	parentLeft.appendChild(parentTitle);

	const parentToggleIcon = document.createElement("img");
	parentToggleIcon.src = "assets/images/plus.svg";
	parentToggleIcon.classList.add("toggle-icon");

	parentHeader.appendChild(parentLeft);
	parentHeader.appendChild(parentToggleIcon);

	// ===== CONTENU PARENT =====
	const parentContent = document.createElement("div");
	parentContent.classList.add("parent-content");

	// Parent fermé par défaut
	parentHeader.classList.remove("active");
	parentContent.style.maxHeight = "0";

	accordionContainer.appendChild(parentHeader);
	accordionContainer.appendChild(parentContent);

	// =======================
	// ACCORDÉONS ENFANTS
	// =======================
	Object.values(sectionData.contenu).forEach(section => {

		const item = document.createElement("div");
		item.classList.add("accordion-item");

		const header = document.createElement("div");
		header.classList.add("accordion-header", "child");

		const left = document.createElement("div");
		left.classList.add("left");

		const childIconImg = document.createElement("img");
		childIconImg.src = "assets/images/icon-child.svg"; // ← icône enfant
		childIconImg.classList.add("icon");

		const title = document.createElement("span");
		title.textContent = section.titre;

		left.appendChild(childIconImg);
		left.appendChild(title);

		const toggleIcon = document.createElement("img");
		toggleIcon.src = "assets/images/plus.svg";
		toggleIcon.classList.add("toggle-icon");

		header.appendChild(left);
		header.appendChild(toggleIcon);

		const content = document.createElement("div");
		content.classList.add("accordion-content");

		// ===== CONTENU TEXTE =====
		let html = "";

		if (section.descriptif) {
			html += `<p>${section.descriptif}</p>`;
		}

		if (section.qualification) {
			html += `<p><strong>Qualification :</strong> ${section.qualification}</p>`;
		}

		if (typeof section.procedure === "string") {
			html += `<p><strong>Procédure :</strong> ${section.procedure}</p>`;
		}

		// Cas spécifiques (véhicules)
		if (section.cas) {
			section.cas.forEach(c => {
				html += `
					<h4 class="sub-title">${c.cas}</h4>
					<p>${c.descriptif}</p>
					<p><strong>Sanctions :</strong> ${c.qualification}</p>
				`;
			});
		}

		// Procédures détaillées
		if (section.procedure?.patrimoine) {
			html += `
				<h4>${section.procedure.patrimoine.titre}</h4>
				<p>${section.procedure.patrimoine.etapes}</p>
			`;
		}

		if (section.procedure?.proximite) {
			html += `
				<h4>${section.procedure.proximite.titre}</h4>
				<p>${section.procedure.proximite.etapes}</p>
			`;
		}

		content.innerHTML = html;

		item.appendChild(header);
		item.appendChild(content);
		parentContent.appendChild(item);

		// ===== INTERACTION ENFANT =====
		header.addEventListener("click", () => {
			const isOpen = header.classList.contains("active");

			closeAllChildren(parentContent);

			if (!isOpen) {
				header.classList.add("active");
				toggleIcon.src = "assets/images/minus.svg";
				content.classList.add("open");
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	});

	// =======================
	// INTERACTION PARENT
	// =======================
	parentHeader.addEventListener("click", () => {
		const isOpen = parentHeader.classList.contains("active");

		parentHeader.classList.toggle("active");
		parentToggleIcon.src = isOpen
			? "assets/images/plus.svg"
			: "assets/images/minus.svg";

		if (isOpen) {
			closeAllChildren(parentContent);
			parentContent.style.maxHeight = "0";
		} else {
			parentContent.style.maxHeight = parentContent.scrollHeight + "px";
		}
	});
});
