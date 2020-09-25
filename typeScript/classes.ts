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
}

//this book is an obj
const book: Book = new Book();
book.name = "Learn js";
book.pages = 56;
book.isOpen = false;
console.log(book);
console.log(Book);
book.open();
