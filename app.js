const myLibrary = [
  {
    title: "The Hobbit",
    author: "JRR Tolkien",
    pages: 200,
    read: true
  },
  {
    title: "Sirens of Titan",
    author: "Kurt Vonnegut",
    pages: 250,
    read: true
  }
];

const newBookBtn = document.querySelector("#newBook");
const libraryDisplay = document.querySelector(".library-display");
const hiddenForm = document.querySelector("#hidden-form");

function Book(title, author, pages, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title}, by ${author}, ${pages} pages long, ${read}`;
  }
}

function addBookToLibrary() {
  // do stuff here
}

newBookBtn.addEventListener("click", e => {
  e.preventDefault();
  
  hiddenForm.classList.toggle("hidden");
})

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", `card data-${i}`);

    newDiv.innerHTML = 
    `<p>Title: ${myLibrary[i].title}</p>
     <p>Author: ${myLibrary[i].author}</p>
     <p>Pages: ${myLibrary[i].pages}</p>
     <p>Read: ${myLibrary[i].read}</p>
     <button>Change Read Status</button>`;

    libraryDisplay.appendChild(newDiv);
  }
}

displayBooks();