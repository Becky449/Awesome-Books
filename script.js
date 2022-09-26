const books = [];
const form = document.querySelector('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const submit = document.getElementById('submit');
const body = document.querySelector('body');

/* function newBook(){
    let book = {};
    book = {
        title: title,
        author: author
    }
    books.push(book);
} */

const retrieveData = localStorage.getItem('book');

body.onload = () => {
    if (retrieveData) {
    const serialize = JSON.parse(retrieveData);
    title.value = serialize.text;
    author.value = serialize.text;
}
};

document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', (event) => {
    event.preventDefault();

      // Get input field values
    const titleData = document.querySelector('#title').value;
    const authorData = document.querySelector('#author').value

      // Store values in object;
    const bookData = {
        title: titleData,
        author: authorData,
    };

      // store the object in localStorage

    localStorage.setItem('book', JSON.stringify(bookData));
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});