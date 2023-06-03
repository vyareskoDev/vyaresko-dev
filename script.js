const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const changeThemeButtonAlt = document.querySelector("#change-theme-alt");
const headerNav = document.querySelector("header nav");
const changeThemeButton = document.querySelector("#change-theme");
const header = document.querySelector("header");
const headings = document.querySelector(".body__headings");
const cards = document.querySelector(".body__cards")

window.addEventListener("load", () => { 
    let currentValue = localStorage.getItem("theme");
    if(!currentValue) return;

    document.body.classList.add(currentValue);
    if(currentValue === "dark") {
        setDarkTheme();
    }else {
        setLightTheme();
    }

    if(document.body.clientWidth <= 1000) {
        headerNav.classList.add('hidden');
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

hamburger.addEventListener("click", () => {
    
    if(hamburger.dataset.state === "open") {
        hamburger.dataset.state = "closed";
    }else {
        hamburger.dataset.state = "open"
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
            hamburger.classList.add('hidden');
            if(!hamburgerMenu.classList.contains("hidden")) {
                hamburgerMenu.classList.add("hidden");
                if(document.body.classList.contains("light")) {
                    hamburger.src = "./icons/white-theme-burger.svg";
                }else {
                    hamburger.src = "./icons/dark-theme-burger.svg"
                }
            }
        }
    }
})

document.addEventListener("keydown", (e) => {
    console.log(e.code)
    if((e.key == "Escape" || e.code == "Escape") && !hamburgerMenu.classList.contains("hidden")) {
        hamburger.classList.remove("hidden")
        hamburgerMenu.classList.add("hidden")
    }
})