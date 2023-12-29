const add = document.querySelector('#add');
const addButton = document.querySelector('#addButton');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const books = document.querySelector('.books');
const card = document.querySelector(".card");
const dialog = document.querySelector('#dialog');

const myLibrary = [];

function Book(name, author, pages) {
    this.title = name;
    this.author = author;
    this.pages = pages;
    this.read = "Not Read";
}

function addBooks(item){
    const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');

        bookCard.classList.add('card');

        title.textContent = `Title: ${item.title}`;
        author.textContent = `Author: ${item.author}`;
        pages.textContent = `Pages: ${item.pages}`;
        
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        books.appendChild(bookCard);

}

addButton.addEventListener("click", ()=>{
    dialog.showModal();
});

add.addEventListener("click", ()=>{
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(book);
});

dialog.addEventListener("close", ()=>{
    for (item of myLibrary){
        addBooks(item);
    }
});