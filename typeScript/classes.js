// interface Book {
//   name: string;
//   pages: number;
// }
var BookInfo = /** @class */ (function () {
    function BookInfo(name, pages) {
        this.name = name;
        this.pages = pages;
    }
    return BookInfo;
}());
var book = new BookInfo("Learn TS", 45);
console.log(book);
console.log(BookInfo);
