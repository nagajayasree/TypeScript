interface Book {
  name: string;
  pages: number;
}

class BookInfo {
  name: string;
  pages: number;

  constructor(name: string, pages: number) {
    this.name = name;
    this.pages = pages;
  }
}

const book: Book = new BookInfo("Learn TS", 45);
console.log(book);
console.log(BookInfo);
