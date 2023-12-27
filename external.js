const add = document.querySelector('#add');
const addButton = document.querySelector('#addButton');
const closeButton = document.querySelector('#closeButton');
const dialog = document.querySelector('#dialog');

const myLibrary = [];

addButton.addEventListener("click", ()=>{
    dialog.showModal();
});

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = "Not Read";
}