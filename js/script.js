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
        headerElement.classList.toggle("header--lightTheme");
        moreImportantElement.classList.toggle("section__header--lightTheme");
        moreImportantOneElement.classList.toggle("section__header--lightTheme");
        moreImportantTwoElement.classList.toggle("section__header--lightTheme");
        moreImportantTreeElement.classList.toggle("section__header--lightTheme");
        footerElement.classList.toggle("footer--lightTheme");
        changeDarkElement.innerText = headerElement.classList.contains("header--lightTheme") ? "ciemny" : "jasny";
    };

    const toggleDisplayPhoto = () => {
        const photoElement = document.querySelector(".js-photo");
        const changeTextElement = document.querySelector(".js-changeText");
        photoElement.classList.toggle("section__photo--display");
        changeTextElement.innerText = photoElement.classList.contains("section__photo--display") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const changeThemeButtonElement = document.querySelector(".js-changeThemeButton");
        const buttonRemovePhotoElement = document.querySelector(".js-buttonRemovePhoto");
        changeThemeButtonElement.addEventListener("click", toggleBackground);
        buttonRemovePhotoElement.addEventListener("click", toggleDisplayPhoto);

        welcome();
    };

    init();

}