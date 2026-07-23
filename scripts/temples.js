let year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;

let menuButton = document.querySelector("#menu");
let navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

});