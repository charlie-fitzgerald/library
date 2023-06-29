const displayFormButton = document.querySelector(".display-form-button");
const submitBookBtn = document.querySelector(".submit-book-btn")
const formWrapper = document.querySelector(".form-wrapper");
const newBookForm = document.querySelector(".new-book-form");

displayFormButton.addEventListener("click", e => {
    e.preventDefault();
    formWrapper.classList.remove('hidden');
})

submitBookBtn.addEventListener("click", e => {
    e.preventDefault();
    formWrapper.classList.add("hidden");
})

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}