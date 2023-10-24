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
