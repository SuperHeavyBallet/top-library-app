let myLibrary = [];

const bookList = document.querySelector("#book-list");
const newBookInput = document.querySelector("#book-entry");
const submitBookButton = document.querySelector("#submit-book");

UpdateBookList();

submitBookButton.addEventListener('click', (e) => {

    myLibrary.push(newBookInput.value);
    newBookInput.value = '';
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
            const newContent = document.createTextNode(myLibrary[i]);
            newDiv.appendChild(newContent);
            bookList.appendChild(newDiv);
    }
}


