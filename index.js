var dialog = document.querySelector('dialog');
var addBookDialogBtn = document.querySelector('#addBook');
var closeDialogBtn = document.querySelector('#closeDialog');

addBookDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});


closeDialogBtn.addEventListener('click', () => {
    dialog.close();
});

var addBookBtn = document.querySelector('#addBookBtn');
function addBookToLibrary(book) {
    var bookCard = document.createElement('div');
    bookCard.classList.add('book');
    var title = document.createElement('h2');
    title.textContent = book.title;
    var author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    var pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    var read = document.createElement('p');
    read.textContent = `Read: ${book.read}`;
    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "remove")
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => {
        bookCard.remove();
    });

    var readBtn = document.createElement('button');
    readBtn.setAttribute("id", "read")
    readBtn.textContent = 'Read';

    function isNotRead() {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "green";
    }

    function isRead() {
        readBtn.textContent = "Unread";
        readBtn.style.backgroundColor = "red";
    }

    if (read.textContent === "Read: No") {
        isNotRead();
    } else {
        isRead();
    }

    readBtn.addEventListener('click', () => {
        if (read.textContent === "Read: Yes") {
            read.textContent = "Read: No";
            isNotRead();
        } else {
            read.textContent = "Read: Yes";
            isRead();
        }
    });

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    document.querySelector('.books').appendChild(bookCard);
}

addBookBtn.addEventListener('click', () => {
    var book = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        pages: document.querySelector('#pages').value,
        read: document.querySelector('#read').value
    }
    addBookToLibrary(book);
    dialog.close();
});

document.getElementById('dark-mode').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});