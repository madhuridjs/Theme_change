// const theme_check = document.querySelector(".checkbox");
// theme_check.addEventListener("change", () => {
//     document.body.classList.toggle("dark");
// });

const theme_switch = document.getElementById("checkbox");

theme_switch.checked = false;
function changeHandler () {
    if(this.checked) {
        document.body.classList.remove("light_theme");
        document.body.classList.add("dark_theme");
        localStorage.setItem("theme", "dark_theme");
    } else {
        document.body.classList.add("light_theme");
        document.body.classList.remove("dark_theme");
        localStorage.setItem("theme", "light_theme")
    }
}
theme_switch.addEventListener("change", changeHandler);
window.onload = checkTheme();

function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");

    if(localStorageTheme !== null && localStorageTheme === "dark_theme") {
        //set theme of body
        document.body.className = localStorageTheme;
        //adjust the slider
        const theme_switch = document.getElementById("checkbox");
        theme_switch.checked = true;
    }
}