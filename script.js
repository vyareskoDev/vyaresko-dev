const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const changeThemeButtonAlt = document.querySelector("#change-theme-alt");
const headerNav = document.querySelector("header nav");
const changeThemeButton = document.querySelector("#change-theme");
const header = document.querySelector("header");
const headings = document.querySelector(".body__headings");
const cards = document.querySelector(".body__cards");
const menuChangeLanguage = document.querySelector("#hamburger-menu__change-language");

window.addEventListener("load", () => { 
    let currentTheme = localStorage.getItem("theme");
    let isMenuOpen = localStorage.getItem("isMenuOpen");

    if(!currentTheme) return;
    if(isMenuOpen) {
        showMenu();
    }

    document.body.classList.add(currentTheme);
    if(currentTheme === "dark") {
        setDarkTheme();
    }else {
        setLightTheme();
    }
})

changeThemeButton.addEventListener("click", () => {
    if(document.body.classList.contains("light")) {
        setDarkTheme();
    }else {
        setLightTheme();
    }
}, false);

changeThemeButtonAlt.addEventListener("click", () => {
    hamburger.dataset.state = "open";
    if(document.body.classList.contains("light")) {
        setDarkTheme();
    }else {
        setLightTheme();
    }
}, false);

hamburger.addEventListener("click", () => {
    if(hamburger.dataset.state === "open") {
        hamburger.dataset.state = "closed";
    }else {
        hamburger.dataset.state = "open";
    }

    toggleMenu();
});

document.addEventListener("keydown", (e) => {
    if((e.key == "Escape" || e.code == "Escape") && !hamburgerMenu.classList.contains("hidden")) {
        hamburger.classList.remove("hidden")
        hideMenu();
    }
})

menuChangeLanguage.addEventListener("click", () => {
    localStorage.setItem("isMenuOpen", true);
});

window.addEventListener("resize", () => {
    if(document.body.clientWidth >= 1168 && !isMenuVisible()) {
        hideMenu();
    }
})

function setDarkTheme() {
    hamburger.src = "/icons/dark-theme-burger.svg";

    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
}

function setLightTheme() {
    hamburger.src = "/icons/white-theme-burger.svg";

    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
}

function showMenu() {
    hamburger.dataset.state = "open"
    hamburgerMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    localStorage.setItem("isMenuOpen", true);
}

function hideMenu() {
    hamburger.dataset.state = "closed";
    hamburgerMenu.classList.add("hidden");
    document.body.style.overflow = "scroll";
    localStorage.setItem("isMenuOpen", false);
}

function toggleMenu() {
    hamburgerMenu.classList.toggle("hidden");

    if(hamburgerMenu.classList.contains("hidden")) {
        hamburger.dataset.state = "closed";
        document.body.style.overflow = "scroll";
        localStorage.setItem("isMenuOpen", false);
        return;
    }

    hamburger.dataset.state = "open";
    document.body.style.overflow = "hidden";
    localStorage.setItem("isMenuOpen", true);
}

function isMenuVisible()
{
    return hamburgerMenu.classList.contains("hidden");
}