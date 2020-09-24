// interface Book {
//   name: string;
//   pages: number;
// }

class Book {
  //this Book is class
  name: string;
  pages: number;
  isOpen: boolean;

  open() {
    console.log(this.isOpen);
  }

  constructor(name, pages, isOpen) {
    this.name = name;
    this.pages = pages;
    this.isOpen = isOpen;
  }
}

//this book is an obj
const book: Book = new Book("Learn js", 45, false);
console.log(book);
console.log(Book);

let book2 = new Book("Learn ts", 78, true);
book2.open();
