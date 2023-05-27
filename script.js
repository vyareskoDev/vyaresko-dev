const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const changeThemeMenuButton = document.querySelector(".change-theme");
const headerNav = document.querySelector("header nav");
const changeThemeButton = document.querySelector("#change-theme");


window.addEventListener("load", () => { 
    let currentValue = localStorage.getItem("theme");
    if(!currentValue) return;

    document.body.classList.add(currentValue);
    if(currentValue === "dark") {
        setDarkTheme();
    }else {
        setLightTheme();
    }
})

changeThemeButton.addEventListener("click", () => {
    if(changeThemeButton.dataset.icon === "sun") {
        setDarkTheme();  
    }else {
        setLightTheme();
    }
}, false);

changeThemeMenuButton.addEventListener("click", () => {
    if(changeThemeButton.dataset.icon === "sun") {
        setDarkTheme();   
    }else {
        setLightTheme();
    }
}, false);


function setDarkTheme() {
    const image = changeThemeButton.children[0];
    const image2 = changeThemeMenuButton.children[0];

    hamburger.src = "/icons/dark-theme-burger.svg";
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");

    changeThemeButton.dataset.icon = "moon";
    changeThemeMenuButton.dataset.icon = "moon";
    image.src = "/icons/moon.svg";
    image2.src = "/icons/moon.svg";
}

function setLightTheme() {
    const image = changeThemeButton.children[0];
    const image2 = changeThemeMenuButton.children[0];
    hamburger.src = "/icons/white-theme-burger.svg";
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");

    changeThemeButton.dataset.icon = "sun";
    changeThemeMenuButton.dataset.icon = "sun";
    image.src = "/icons/sun.svg";
    image2.src = "/icons/sun.svg";
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