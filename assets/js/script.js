const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {

        const isActive = header.classList.contains("active");

        headers.forEach(h => {
            h.classList.remove("active");
            const img = h.querySelector(".icon");
            if (img) img.src = "assets/images/Vector.svg";
        });

        if (isActive) return;

        header.classList.add("active");
        const icon = header.querySelector(".icon");
        if (icon) icon.src = "assets/images/Vector1.svg";
    });
});