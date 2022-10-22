class BookList {
    constructor() {
      this.readedBooks = [];
      this.notReadedBooks = [];
      this.nextBook = undefined;
      this.currentBook = undefined;
      this.lastBook = undefined;
      this.allBooks = [];
    }

    addBook(book) {
        this.allBooks.push(book);

        if(book.read == true) 
            this.readedBooks.push(book);
        else 
            this.notReadedBooks.push(book);
            this.nextBook = this.notReadedBooks[0];

        if(book.reading == true)
            this.currentBook = book;
    }

    finishCurrentBook() {
        this.currentBook.markAsRead();
        this.readedBooks.push(this.currentBook);
        this.lastBook = this.currentBook;
    }

  }

class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.reading = false;
        this.readDate = undefined;
    }

    markAsRead() {
        this.read = true;
        this.readDate = new Date(Date.now());
        this.reading = false;
    }

    markAsReading() {
        this.reading = true;
    }

}

let libro1 = new Book("Pedro Porro", "Aventura", "Cristiano Ronaldo");
libro1.markAsRead();

let libro2 = new Book("Illora", "Historia", "Susana Horia");
libro2.markAsRead();

let libro3 = new Book("Que esta haciendo internet", "Informatica", "Nicholas Car");
libro3.markAsRead();

let libro4 = new Book("La Villa", "Historia", "anonimo");
libro4.markAsReading();

let libro5 = new Book("Gojar", "Historia", "anonimo");

let libreria = new BookList();

libreria.addBook(libro1);
libreria.addBook(libro2);
libreria.addBook(libro3);
libreria.addBook(libro4);
libreria.addBook(libro5);

// libreria.finishCurrentBook();

console.log("todos los libros: ",libreria.allBooks);
console.log("libros leidos: ",libreria.readedBooks);
console.log("libros no leidos: ",libreria.notReadedBooks);
console.log("siguiente libro: ",libreria.nextBook);
console.log("leyendo: ",libreria.currentBook);
console.log("anterior libro: ",libreria.lastBook);
