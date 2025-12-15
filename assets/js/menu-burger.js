const openBurger = document.getElementById("opn-burger");
const bottomNav = document.getElementById("bottom-nav");
const body = document.getElementsByTagName("body")[0]

openBurger.addEventListener("click", () => {
  openCloseMenuBurger();
});

openCloseMenuBurger = () => {
  const content = document.getElementById("content");
  const overlay = document.getElementById("overlay");

  if (bottomNav.style.zIndex == 1) {
    bottomNav.style.zIndex = 2;
    body.style.backgroundColor = "white"
    content.style.display = "block";

    overlay.style.display = "none";
  } else {
    bottomNav.style.zIndex = 1;
    body.style.backgroundColor = "var(--green)"
    content.style.display = "none";

    overlay.style.display = "block";
  }
};
