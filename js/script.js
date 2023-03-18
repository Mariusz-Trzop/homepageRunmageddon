{
    const welcome = () => {
        console.log("Hello Friens!")
    };

    const toggleBackground = () => {
        const headerElement = document.querySelector(".js-header");
        const changeDarkElement = document.querySelector(".js-changeDark");
        const moreImportantElement = document.querySelector(".js-moreImportant");
        const moreImportantOneElement = document.querySelector(".js-moreImportantOne");
        const moreImportantTwoElement = document.querySelector(".js-moreImportantTwo");
        const moreImportantTreeElement = document.querySelector(".js-moreImportantTree");
        const footerElement = document.querySelector(".js-footer");
        headerElement.classList.toggle("header__lightTheme");
        moreImportantElement.classList.toggle("section__moreImportant--lightTheme");
        moreImportantOneElement.classList.toggle("section__moreImportant--lightTheme");
        moreImportantTwoElement.classList.toggle("section__moreImportant--lightTheme");
        moreImportantTreeElement.classList.toggle("section__moreImportant--lightTheme");
        footerElement.classList.toggle("footer__lightTheme");
        changeDarkElement.innerText = headerElement.classList.contains("header__lightTheme") ? "ciemny" : "jasny";
    };

    const toogleDisplayPhoto = () => {
        const photoElement = document.querySelector(".js-photo");
        const changeTextElement = document.querySelector(".js-changeText");
        photoElement.classList.toggle("section__photo--display");
        changeTextElement.innerText = photoElement.classList.contains("section__photo--display") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const changeThemeButtonElement = document.querySelector(".js-changeThemeButton");
        const buttonRemovePhotoElement = document.querySelector(".js-buttonRemovePhoto");
        changeThemeButtonElement.addEventListener("click", toggleBackground);
        buttonRemovePhotoElement.addEventListener("click", toogleDisplayPhoto);

        welcome();
    };

    init();

}