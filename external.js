const add = document.querySelector('#add');
const addButton = document.querySelector('#addButton');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const dialog = document.querySelector('#dialog');

const myLibrary = [];

addButton.addEventListener("click", ()=>{
    dialog.showModal();
});

function Book(name, author, pages) {
    this.title = name;
    this.author = author;
    this.pages = pages;
    this.read = "Not Read";
}

add.addEventListener("click", ()=>{
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(book);
})

dialog.addEventListener("close", ()=>{
    console.log(myLibrary[0]);
})