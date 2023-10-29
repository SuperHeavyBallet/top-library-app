let myLibrary = [];

function book(title, author, numberOfPages, hasBeenRead) {
    this.title = 'Title: ' + title;
    this.author = 'Author: ' + author;
    this.numberOfPages = 'Number of Pages: ' +  numberOfPages;
    //this.hasBeenRead = 'Has Been Read?: ' + hasBeenRead;
    this.hasBeenRead = hasBeenRead;
}



const bookList = document.querySelector("#book-list");
const newBookInputName = document.querySelector("#book-entry-name");
const newBookInputAuthor = document.querySelector('#book-entry-author');
const newBookInputNumberOfPages = document.querySelector('#book-entry-num-of-pages');
const newBookInputHasBeenRead = document.querySelectorAll('.book-entry-has-been-read');
let newBookhasBeenRead;


myLibrary[0] = new book('Harry Potter', 'J.K Rowling', '365', false);
myLibrary[1] = new book('The Fellowship of The Ring', 'J.R.R. Tolkein', '999', true);




const submitBookButton = document.querySelector("#submit-book");

let removeBookButton = document.querySelectorAll('#remove-button');

UpdateBookList();

function displayRadioValue(){
    let ele = document.querySelectorAll('.book-entry-has-been-read');

    for (let i = 0; i < ele.length; i++){
        if (ele[i].checked){

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

    console.log(newBookhasBeenRead);
         return
    

}


submitBookButton.addEventListener('click', (e) => {

   displayRadioValue();


    const newBook = new book(newBookInputName.value, newBookInputAuthor.value, newBookInputNumberOfPages.value, newBookhasBeenRead);
    
    //These function to clear the input fields after submitting
    newBookInputName.value = '';
    newBookInputAuthor.value = '';
    newBookInputNumberOfPages.value ='';
 
    

    

    myLibrary.push(newBook);
    
    UpdateBookList();
    
})


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

            if (myLibrary[i].hasBeenRead == true)
            {
                newDivRead.setAttribute('class', 'green');
            }
            else if (myLibrary[i].hasBeenRead== false)
            {
                newDivRead.setAttribute('class', 'red');
            }



            bookList.appendChild(newDiv);

            
            let removeBookButton = document.querySelectorAll('#remove-button');
            

           

            removeBookButton[i].addEventListener('click', (function(index) {
                return function() {
                    console.log("YOU CLICKED! " + index);
                    RemoveBook(index);
                };
            })(i));        
            

            

            
    }

   
    

    
}

function ClearOldBookList(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


function RemoveBook(indexOfBook)
{
    const removedElement = document.querySelector(`[data-index="${indexOfBook}"]`);
    
    if (removedElement){
        removedElement.remove();
        myLibrary.splice(indexOfBook, 1);
        console.log(myLibrary);
        UpdateBookList();
    }
}









