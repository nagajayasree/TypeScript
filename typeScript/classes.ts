// interface Book {
//   name: string;
//   pages: number;
// }

class BookInfo {
  name: string;
  pages: number;

  constructor(name, pages) {
    this.name = name;
    this.pages = pages;
  }
}

const book = new BookInfo("Learn TS", 45);
console.log(book);
console.log(BookInfo);
