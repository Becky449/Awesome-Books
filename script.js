const books = [];
const form = document.querySelector('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const submit = document.getElementById('submit');

function newBook(){
    let book = {};
    book = {
        title: title,
        author: author
    }
    books.push(book);
}