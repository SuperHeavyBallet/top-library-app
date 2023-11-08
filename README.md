# top-library-app
The Odin Project - Library App in Javascript

1. Declare an empty Array to store the Books in the Library (`myLibrary`)
2. Declare `bookList` as the Div which contains the HTML elements of the Library
3. Declare `newBookInput` as the input field for the User to write the book details //Expand This To More Fields
4. Declare the `submitBookButton` as the button which submits the data from the book input field
5. `UpdateBookList` First, this will use `ClearOldBookList` to empty any divs in the DOM.
Then, the function will loop along the `myLibrary` array and create a new div element for each element in the array.
6. `ClearOldBookList` is the function to clear all existing elements representing books to prevent pile up of repeated book elements before updating

7. Now, the initial input can begin.
8. The `Submit Button` has an event attached, that on clicking will read the value from the `newBookInput` field and add that string to the array as a new element.
Then, it clears the `newBookInput` field to prepare for the next input and prevent repetition.
9. Then the `UpdateBookList` > `ClearOldBookList` > Create New divs for each element of the array loop will continue.


NEW

1. Declare Empty `myLibrary` array to hold all book objects.
2. Create template book object.
3. Add starter book objects to `myLibrary`.
4. Declare html elements to reference.

5. `UpdateBookList()` to make sure the starting array/display is clear

6. `ClearOldBookList` takes the current `bookList` (the HTML element #book-list which contains the list elements) and uses the function to remove each first child of that parent element until none remain, removing all previous html book references.

7. Loops over the current `myLibrary` array and creates a new html element for each array element.
- Declares each required div for the card
- `appendChild` each div to the parent div
- Adds the attributes and text content of each div
- Creates relevent `Text Nodes` for each of the book object's text values and fills them with the relevant text.
- Appends these nodes to the relevent parent divs.
- Adds the `card-number` class to the card number div
- Adds the `book-card` class to the parent div
- Sets the `data-index` of the parent div to `i`
-Appends this new book container to the `bookList` container

