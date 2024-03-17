const refs = {
    openModalBtn: document.querySelector("[data-open-navigation]"),
    closeModalBtn: document.querySelector("[data-close-navigation]"),
    backdrop: document.querySelector("[data-backdrop-navigation]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
    refs.backdrop.classList.toggle("mobile-button-window");
}

function logBackdropClick() {
    console.log("Клик в бекдроп");
}