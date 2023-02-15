console.log("Hello Friens!");

let changeThemeButtonElement = document.querySelector(".js-changeThemeButton");
let headerElement = document.querySelector(".js-header");
let changeDarkElement = document.querySelector(".js-changeDark");
let buttonRemovePhotoElement = document.querySelector(".js-buttonRemovePhoto");
let photoElement = document.querySelector(".js-photo");
let moreImportantElement = document.querySelector(".js-moreImportant");
let moreImportantOneElement = document.querySelector(".js-moreImportantOne");
let moreImportantTwoElement = document.querySelector(".js-moreImportantTwo");
let moreImportantTreeElement = document.querySelector(".js-moreImportantTree");
let changeTextElement = document.querySelector(".js-changeText");
let footerElement = document.querySelector(".js-footer");

changeThemeButtonElement.addEventListener("click", () => {
    headerElement.classList.toggle("header__lightTheme");
    moreImportantElement.classList.toggle("section__moreImportant--lightTheme");
    moreImportantOneElement.classList.toggle("section__moreImportant--lightTheme");
    moreImportantTwoElement.classList.toggle("section__moreImportant--lightTheme");
    moreImportantTreeElement.classList.toggle("section__moreImportant--lightTheme");
    footerElement.classList.toggle("footer__lightTheme");
    changeDarkElement.innerText = headerElement.classList.contains("header__lightTheme") ? "ciemny" : "jasny";
});

buttonRemovePhotoElement.addEventListener("click", () => {
    photoElement.classList.toggle("section__photo--display");
    changeTextElement.innerText = photoElement.classList.contains("section__photo--display") ? "Pokaż" : "Ukryj";
});



