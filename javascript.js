let myLibrary = [];

function book(title, author, numberOfPages, hasBeenRead) {
    this.title = 'Title: ' + title;
    this.author = 'Author: ' + author;
    this.numberOfPages = 'Number of Pages: ' +  numberOfPages;
    this.hasBeenRead = 'Has Been Read?: ' + hasBeenRead;

}

myLibrary[0] = new book('Harry Potter', 'J.K Rowling', '365', 'Yes');
myLibrary[1] = new book('The Fellowship of The Ring', 'J.R.R. Tolkein', '999', 'Yes');

const bookList = document.querySelector("#book-list");
const newBookInputName = document.querySelector("#book-entry-name");
const newBookInputAuthor = document.querySelector('#book-entry-author');
const newBookInputNumberOfPages = document.querySelector('#book-entry-num-of-pages');
const newBookInputHasBeenRead = document.querySelector('#book-entry-has-been-read')

const submitBookButton = document.querySelector("#submit-book");



UpdateBookList();





submitBookButton.addEventListener('click', (e) => {

    const newBook = new book(newBookInputName.value, newBookInputAuthor.value, newBookInputNumberOfPages.value, newBookInputHasBeenRead.value);
    myLibrary.push(newBook);
    newBookInputName.value = '';
    newBookInputAuthor.value = '';
    newBookInputNumberOfPages.value ='';
    newBookInputHasBeenRead.value = '';

    console.log(myLibrary);
    
    UpdateBookList();
    
})

function ClearOldBookList(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

}

function UpdateBookList(){

    ClearOldBookList(bookList);

    for (let i = 0; i < myLibrary.length; i++)
    {
            const newDiv = document.createElement("div");
            const newDivTitle = document.createElement("div");
            const newDivAuthor = document.createElement("div");
            const newDivPages = document.createElement("div");
            const newDivRead = document.createElement("div");
            const newDivRemoveButton = document.createElement('button');
            const newDivCardNumber = document.createElement('div');

            newDiv.appendChild(newDivCardNumber);
            newDiv.appendChild(newDivTitle);
            newDiv.appendChild(newDivAuthor);
            newDiv.appendChild(newDivPages);
            newDiv.appendChild(newDivRead);
            newDiv.appendChild(newDivRemoveButton);
            

            newDivRemoveButton.setAttribute('type', 'button');
            newDivRemoveButton.setAttribute('class', 'remove-button');
            newDivRemoveButton.setAttribute('id', 'remove-button');
            newDivRemoveButton.textContent = ("Remove This Book?");
            newDivCardNumber.textContent = ('Book Number: ' + i);

            const newContentTitle = document.createTextNode(myLibrary[i].title);
            const newContentAuthor = document.createTextNode(myLibrary[i].author);
            const newContentPages = document.createTextNode(myLibrary[i].numberOfPages);
            const newContentRead = document.createTextNode(myLibrary[i].hasBeenRead);
            
            newDivTitle.appendChild(newContentTitle);
            newDivAuthor.appendChild(newContentAuthor);
            newDivPages.appendChild(newContentPages);
            newDivRead.appendChild(newContentRead);

            newDivCardNumber.classList.add('card-number');
            newDiv.classList.add('book-card');
            newDiv.setAttribute('data-index', i);

            bookList.appendChild(newDiv);
    }

    let removeBookButton = document.querySelectorAll('#remove-button');


    for(let i = 0; i < removeBookButton.length; i++)
    {

        removeBookButton[i].addEventListener('click', () => {

    

        removeBookButton[i].parentElement.remove();
        let spliced = myLibrary.splice(i,1);
        myLibrary = spliced;
        console.log(myLibrary);
    
    })

    
}
}



