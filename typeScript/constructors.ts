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

  constructor(name?: string, pages?: number, isOpen?: boolean) {
    //? : indicates optional
    this.name = name;
    this.pages = pages;
    this.isOpen = isOpen;
  }
}

//this book is an obj
let book = new Book("learn ts", 45, true);
console.log(book);
console.log(Book);
book.open();
