const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const changeThemeMenuButton = document.querySelector(".change-theme");
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
        console.log("Hiii!")
        headerNav.classList.add('hidden');
        hamburger.classList.remove('hidden');
    }
})

changeThemeButton.addEventListener("click", () => {
    if(document.body.classList.contains("light")) {
        setDarkTheme();
    }else {
        setLightTheme();
    }
}, false);

changeThemeMenuButton.addEventListener("click", () => {
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
    if(hamburger.dataset.state !== "default") {
        if(document.body.classList.contains("light")) {
            hamburger.src = "./icons/white-theme-close-burger.svg";
        }else {
            hamburger.src = "./icons/dark-theme-close-burger.svg";
        }
        
        hamburger.dataset.state = "default";
    }else {
        if(document.body.classList.contains("light")) {
            hamburger.src = "./icons/white-theme-burger.svg";
        }else {
            hamburger.src = "./icons/dark-theme-burger.svg"
        }
        
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