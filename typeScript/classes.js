// interface Book {
//   name: string;
//   pages: number;
// }
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.open = function () {
        console.log(this.isOpen);
    };
    return Book;
}());
//this book is an obj
var book = new Book();
book.name = "Learn js";
book.pages = 56;
book.isOpen = false;
console.log(book);
console.log(Book);
book.open();
