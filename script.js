const form = document.querySelector('#form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookList = document.getElementById('books-list')
let collection = JSON.parse(localStorage.getItem('collection')) || [];
let book = [];

function newBook() {
  book = {
    title: title.value, 
    author: author.value,
    idNumber: Math.floor(Math.random() * 1000000)
  };
  collection.push(book);
  localStorage.setItem('collection', JSON.stringify(collection));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (title.value !== '' && author.value !== '') {
    newBook();
      const tableRow = document.createElement('tr');
      const newTitle = document.createElement('td');
      const newAuthor = document.createElement('td');
      const deleteButton = document.createElement('button');
      newTitle.innerHTML = `${book.title}`;
      newAuthor.innerHTML = `${book.Author}`;
      deleteButton.innerHTML = 'Delete';
      tableRow.append(newTitle, newAuthor, deleteButton);
      bookList.append(tableRow);
      deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
        deleteBook(book.idNumber);
      });
    form.reset();
  } else {
    alert('Enter valid values for title and author fields, please.');
  }
});


function deleteBook(idNumber) {
  collection = collection.filter((books) => books.idNumber !== idNumber);
  localStorage.setItem('collection', JSON.stringify(collection));
}