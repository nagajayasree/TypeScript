// interface Book {
//   name: string;
//   pages: number;
// }
var Book = /** @class */ (function () {
    function Book(name, pages, isOpen) {
        this.name = name;
        this.pages = pages;
        this.isOpen = isOpen;
    }
    Book.prototype.open = function () {
        console.log(this.isOpen);
    };
    return Book;
}());
//this book is an obj
var book = new Book("learn ts", 45, true);
book.open();
console.log(book);
console.log(Book);
