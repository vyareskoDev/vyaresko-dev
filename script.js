const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hambuger-menu");


hamburger.addEventListener("click", () => {
    hamburgerMenu.classList.remove("hidden");
})