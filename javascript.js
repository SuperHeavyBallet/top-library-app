
class Book{
    constructor(title, author, numberOfPages, hasBeenRead){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.hasBeenRead = hasBeenRead;
    }

}

const myLibrary = [];



const bookList = document.querySelector("#book-list");
const newBookInputName = document.querySelector("#book-entry-name");
const newBookInputAuthor = document.querySelector('#book-entry-author');
const newBookInputNumberOfPages = document.querySelector('#book-entry-num-of-pages');
const newBookInputHasBeenRead = document.querySelectorAll('.book-entry-has-been-read');
let newBookhasBeenRead;



myLibrary[0] = new Book('Harry Potter', 'J.K Rowling', '365', false);
myLibrary[1] = new Book('The Fellowship of The Ring', 'J.R.R. Tolkein', '999', true);




const submitBookButton = document.querySelector("#submit-book");

let readUnreadToggle = document.querySelectorAll('.read-unread-toggle');

let removeBookButton = document.querySelectorAll('#remove-button');

UpdateBookList();

function displayRadioValue(){

    let hasBeenRead = document.querySelectorAll('.book-entry-has-been-read');

    for (let i = 0; i < hasBeenRead.length; i++){
        if (hasBeenRead[i].checked){

            if (i == 0)
            {
                newBookhasBeenRead = true;                
            }
            else if (i == 1)
            {
                newBookhasBeenRead = false;             
            }
        }
    }
         return
    

}


submitBookButton.addEventListener('click', () => {

   displayRadioValue();

    //Validate Text in Entry Field
   if (newBookInputName.value != '' && newBookInputAuthor.value != '' && newBookInputNumberOfPages != '')
   {
        const newBook = new Book(newBookInputName.value, newBookInputAuthor.value, newBookInputNumberOfPages.value, newBookhasBeenRead);
        
        //These function to clear the input fields after submitting
        newBookInputName.value = '';
        newBookInputAuthor.value = '';
        newBookInputNumberOfPages.value ='';

        myLibrary.push(newBook);
        UpdateBookList();
   }
   else{
    alert("Please Fill in all Fields");
   }  
})

// Remove Book button event assignment
bookList.addEventListener('click', (e) =>{
    if (e.target.classList.contains('remove-button')) {
        const index = e.target.parentNode.dataset.index;
        RemoveBook(index);
    }
})



function UpdateBookList(){

    ClearOldBookList(bookList);

    myLibrary.forEach((book, index) => {
        const newDiv = createBookElement(book, index);
        bookList.appendChild(newDiv);
    });
}


function createBookElement(book, index) {

            const newDiv = document.createElement("div");
            const newDivTitle = document.createElement("div");
            const newDivAuthor = document.createElement("div");
            const newDivPages = document.createElement("div");
            const newDivRemoveButton = document.createElement('button');
            const newDivCardNumber = document.createElement('div');
            const newDivReadToggle = document.createElement('button');

            newDiv.appendChild(newDivCardNumber);
            newDiv.appendChild(newDivTitle);
            newDiv.appendChild(newDivAuthor);
            newDiv.appendChild(newDivPages);
            newDiv.appendChild(newDivReadToggle);
            newDiv.appendChild(newDivRemoveButton);
            
            newDivRemoveButton.setAttribute('type', 'button');
            newDivRemoveButton.setAttribute('class', 'remove-button');
            newDivRemoveButton.setAttribute('id', 'remove-button');
            newDivRemoveButton.textContent = ("Remove This Book?");
            newDivCardNumber.textContent = ('Book Number: ' + index);
            

            const newContentTitle = document.createTextNode(myLibrary[index].title);
            const newContentAuthor = document.createTextNode(myLibrary[index].author);
            const newContentPages = document.createTextNode(myLibrary[index].numberOfPages);
            
            
            newDivTitle.appendChild(newContentTitle);
            newDivAuthor.appendChild(newContentAuthor);
            newDivPages.appendChild(newContentPages);

            newDivCardNumber.classList.add('card-number');
            newDiv.classList.add('book-card');
            newDiv.setAttribute('data-index', index);
            newDivReadToggle.classList.add('read-unread-toggle');

            if (myLibrary[index].hasBeenRead == true)
            {
                newDivReadToggle.setAttribute('class', 'green');
                newDivReadToggle.textContent = ('Has Been Read');
            }
            else if (myLibrary[index].hasBeenRead== false)
            {
                newDivReadToggle.setAttribute('class', 'red');
                newDivReadToggle.textContent = ('Not Read');
            }

            return newDiv;    
}


function ClearOldBookList(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


function RemoveBook(indexOfBook)
{
    myLibrary.splice(indexOfBook, 1);
    UpdateBookList();
}









