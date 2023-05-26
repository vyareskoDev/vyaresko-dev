const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const headerNav = document.querySelector("header nav");


hamburger.addEventListener("click", () => {
    if(hamburger.dataset.state !== "default") {
        hamburger.src = "./icons/white-theme-close-burger.svg";
        hamburger.dataset.state = "default";
    }else {
        hamburger.src = "./icons/white-theme-burger.svg";
        hamburger.dataset.state = "opened";
    }
    hamburgerMenu.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
    if(document.body.clientWidth <= 1000) {
        headerNav.classList.add('hidden');
        hamburger.classList.remove('hidden');
    }else {
        if(headerNav.classList.contains('hidden')) {
            headerNav.classList.remove('hidden');
            hamburger.classList.add('hidden')
        }
    }
})