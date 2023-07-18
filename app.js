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
    read: false
  }
];

const newBookBtn = document.querySelector("#newBook");
const libraryDisplay = document.querySelector(".library-display");
const hiddenForm = document.querySelector("#hidden-form");
const submitBtn = document.querySelector("#submit");
const readBtn = document.querySelector(".read-btn");
const deleteBtn = document.querySelector(".delete-btn");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookRead = document.querySelector("#read");


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title}, by ${author}, ${pages} pages long, ${read}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);

  myLibrary.push(book);
}

function clearInputs() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;
}

submitBtn.addEventListener("click", e => {
  e.preventDefault();

  let title = bookTitle.value;
  let author = bookAuthor.value;
  let pages = bookPages.value;
  let read = bookRead.checked;
  
  addBookToLibrary(title, author, pages, read);
  hiddenForm.classList.toggle("hidden");
  libraryDisplay.innerHTML = "";
  clearInputs();  
  displayBooks();
})

newBookBtn.addEventListener("click", e => {
  e.preventDefault();

  hiddenForm.classList.toggle("hidden");
})

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", `card data-${i}`);

    if (myLibrary[i].read === true) {
      newDiv.innerHTML = 
    `<p>Title: ${myLibrary[i].title}</p>
     <p>Author: ${myLibrary[i].author}</p>
     <p>Pages: ${myLibrary[i].pages}</p>
     <p>Read: Yes</p>
     <button id="read-btn">Change Read Status</button>
     <button class="delete-btn">Delete Book</button>`;
    } else {
      newDiv.innerHTML = 
    `<p>Title: ${myLibrary[i].title}</p>
     <p>Author: ${myLibrary[i].author}</p>
     <p>Pages: ${myLibrary[i].pages}</p>
     <p>Read: No</p>
     <button read-btn-${i}>Change Read Status</button>
     <button class="delete-btn-${i}">Delete Book</button>`;
    }   

    libraryDisplay.appendChild(newDiv);
  }
}

displayBooks();