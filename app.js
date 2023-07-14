const displayFormButton = document.querySelector(".display-form-button");
const submitBookBtn = document.querySelector(".submit-book-btn")
const formWrapper = document.querySelector(".form-wrapper");
const newBookForm = document.querySelector(".new-book-form");
const libraryGrid = document.querySelector(".library-grid");

let myLibrary = [
  
  {title: 'The Stand',
  author: 'Stephen King',
  pages: 1100,
  read: true},

  {title: 'Pride and Prejudice',
  author: 'Jane Austen',
  pages: 1000000,
  read: false
  }

];

const displayBooks = arr => {
  arr.forEach(book => {
    const bookCard = document.createElement("div");
    const para = document.createElement('p');
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const read = book.read;

    para.innerHTML = title;
    bookCard.appendChild(para);

    libraryGrid.appendChild(bookCard);
  })
}



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

displayFormButton.addEventListener("click", e => {
  e.preventDefault();
  formWrapper.classList.remove('hidden');
  displayBooks(myLibrary);
})

submitBookBtn.addEventListener("click", e => {
  e.preventDefault();
  formWrapper.classList.add("hidden");
})