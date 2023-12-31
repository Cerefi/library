const add = document.querySelector('#add');
const addButton = document.querySelector('#addButton');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const bookTitle = document.querySelector('#bookTitle');
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
    const deleteButton = document.createElement('button');
    const readNotRead = document.createElement('button');

    bookCard.classList.add('card');

    title.textContent = `Title: ${item.title}`;
    author.textContent = `Author: ${item.author}`;
    pages.textContent = `Pages: ${item.pages}`;
    readNotRead.textContent = `${item.read}`;
    deleteButton.textContent = 'Delete';

    deleteButton.setAttribute('data-index', item.title);
    
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(deleteButton);
    bookCard.appendChild(readNotRead);
    books.appendChild(bookCard);

    deleteButton.addEventListener('click', ()=>{
        let counter = 0;

        for (each of myLibrary){
            if (each.title === item.title){
                myLibrary.splice(counter, 1);
                books.removeChild(bookCard);
            }
            counter++;
        }

        console.log(myLibrary);
    })
}

addButton.addEventListener("click", ()=>{
    dialog.showModal();
});

add.addEventListener("click", ()=>{
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(book);
});

dialog.addEventListener("close", ()=>{
    const lastAdded = myLibrary.length - 1;
    addBooks(myLibrary[lastAdded]);
    console.log(myLibrary);
});