const container_left = document.querySelector(".main-cont")
const navbar = document.querySelector(".navbar-main")

let isOpen = false

container_left.addEventListener("click", () => {
    if (!isOpen) {
        navbar.style.display = "flex";
    }
    else {
        navbar.style.display="none";
    }

    isOpen=!isOpen;
});